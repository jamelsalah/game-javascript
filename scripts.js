function main(){
    canvas=document.getElementById('canvas')
    ctx=canvas.getContext('2d')
    canvas.width=width
    canvas.height=height
    canvas.style.border='3px solid black'

    addEventListener('mousedown',click)
    addEventListener('keydown',()=>{if(event.keyCode==37){objects.movimentation.left()}})//<-
    addEventListener('keydown',()=>{if(event.keyCode==39){objects.movimentation.right()}})//->
    addEventListener('keydown',()=>{if(event.keyCode==40){objects.movimentation.down()}})
    run();
}
function run(){
    att();
    draw();
    setTimeout(run,1000/fps);
}
function att(){
    if(state==states.playing){
        objects.att();
        objects.spawn();
    }
}
function draw(){
    ctx.fillStyle='black'
    ctx.fillRect(0,0,400,600)
    //bottom=============================================
        ctx.drawImage(circleBottom, 0*px, 535)
        ctx.drawImage(triangleBottom, 1*px, 535)
        ctx.drawImage(squareBottom, 2*px, 535)


    if(state==states.play){
        ctx.save();
        ctx.translate(width/2,height/2)
        ctx.fillStyle='green'
        ctx.fillRect(-67,-25,133,50)
        ctx.fillStyle='white'
        ctx.font='40px arial'
        ctx.fillText('play',-35,10)
        ctx.restore();
    } 
    if(state==states.playing){
        ctx.save();
        ctx.translate(width/2,height/2)
        ctx.font='40px arial'
        ctx.fillStyle='white'
        ctx.fillText(score,-10,-270)
        ctx.restore();

        //obj========
            objects.draw();
    }
    if(state==states.lose){
        ctx.save();
        ctx.translate(width/2,height/2)
        ctx.fillStyle='red'
        ctx.fillRect(-67,-25,133,50)
        ctx.fillStyle='white'
        ctx.font='40px arial'
        ctx.fillText('home',-50,10)
        ctx.fillStyle='white'
        ctx.fillText(score,-10,-270)
        ctx.restore();
    }   
}
function click(){
    if(state==states.play){
            state=states.playing
    }else if(state==states.lose){
        state=states.play
        score=0
    }
}
//================================================
main();
