class Log {
    constructor(x,y,height,angle){
        var options = {
            restitution:0.8,
            friction: 1,
            density: 1.0
        }
        // this refers to the objects
        this.body = Bodies.rectangle(x,y,20,height,options) 
        this.width = 20
        this.height = height
       // giving angle by user like we did for width and height
        Matter.Body.setAngle(this.body, angle);
        World.add(world,this.body)
    }
    display(){
        push()
        fill("white");
        stroke("grey")
        strokeWeight(5);
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height) 
        pop()
        
    }
}