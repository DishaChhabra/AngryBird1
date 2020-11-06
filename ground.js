class Ground{
    // give it properties
    constructor(x,y,width,height){
        var options = {
            // not to move
            isStatic : true
        }
    // create the blueprint
    this.body = Bodies.rectangle(x,y,width,height, options);
    // assign the values
    this.width = width
    this.height = height
    // add it to our world    
    World.add(world, this.body);
 }

    display() {
        rectMode(CENTER);
        // display like this, according to the values
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}