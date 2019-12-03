var canvas,ctx
var fps=40
var width=400
var height=600
var states={
    play:0,
    playing:1,
    lose:2,
}
var imgCircle=new Image();imgCircle.src='circle.png'
var imgSquare=new Image();imgSquare.src='square.png'
var imgTriangle=new Image();imgTriangle.src='triangle.png'
var triangleBottom=new Image();triangleBottom.src='triangleBottom.png'
var circleBottom=new Image();circleBottom.src='circleBottom.png'
var squareBottom=new Image();squareBottom.src='squareBottom.png'
types={
    circle:1,
    triangle:2,
    square:3,
}
var state=0
var score=0
var px=width/3
var objects={
    objs:[],
    movimentation:{
        left(){
            len=objects.objs.length
            for(i=0; i<len; i++){
                obj=objects.objs[i]
                if(obj.x!=0*px){
                    objects.objs[i].x-=1*px
                }
            }
        },
        right(){
            len=objects.objs.length
            for(i=0; i<len; i++){
                obj=objects.objs[i]
                if(obj.x!=2*px){
                    objects.objs[i].x+=1*px
                }
            }
        },
        down(){
            len=objects.objs.length
            for(i=0; i<len; i++){
                obj=objects.objs[i]
                if(obj.y<580){
                    objects.objs[i].y+=20
                }
            }
        }
    },
    spawn(){
        if(this.objs.length<1){
            this.objs.push({
                x:Math.floor(Math.random()*3)*px,
                y:-100,
                w:133,
                h:100,
                type:Math.floor(Math.random()*3)+1
            })
        }
    },
    att(){
        let len=this.objs.length
        for(let i=0; i<len; i++){
            let obj=this.objs[i]
            if(obj.y<580){
                let lvl=score*0.3
                this.objs[i].y+=(5+lvl)
            }else if(obj.y+(obj.h/1.5)>=580){
                if(obj.type==types.circle  &&  obj.x==0*px){
                    score++
                    this.objs.splice(i,1)
                    len--
                    i--
                }else if(obj.type==types.triangle  &&  obj.x==1*px){
                    score++
                    this.objs.splice(i,1)
                    len--
                    i--
                }else if(obj.type==types.square  &&  obj.x==2*px){
                    score++
                    this.objs.splice(i,1)
                    len--
                    i--
                }else{
                    len--
                    i--
                    state=states.lose
                    this.objs=[]
                }
            }
        }
    },
    draw(){
        len=this.objs.length
        for( i=0; i<len; i++){
            obj=this.objs[i]
            if(obj.type==types.circle){
                ctx.drawImage(imgCircle, obj.x, obj.y)
            }else if(obj.type==types.triangle){
                ctx.drawImage(imgTriangle, obj.x, obj.y)
            }else if(obj.type==types.square){
                ctx.drawImage(imgSquare, obj.x, obj.y)
            }
        }
    }
}
