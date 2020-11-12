class Drop{
    constructor(x,y,radius){
        var options={
        density:0.5,
        isStatic:false,
        friction:0.1
    }
    
this.body=Bodies.circle(x,y,5,options)
this.radius=5;
World.add(world,this.body)
 }
display(){
var pos=this.body.position
var angle=this.body.angle
push()
fill("blue")
translate(pos.x,pos.y)
rotate(angle)
pop()
}
}
