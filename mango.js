class Mango {
    constructor(x, y, radius) {
        var options = {
            isStatic :true,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }
        this.body = Bodies.circle(x, y, radius / 2, options);
        this.radius = radius / 2;
        this.image=loadImage("mango.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
       // translate(pos.x, pos.y);
        fill("orange");
        //ellipseMode(CENTER);
       // ellipse(0, 0, this.radius, this.radius);
        image(this.image, pos.x, pos.y, 50, 50);
     
        pop();
    }

    /*addPic(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("orange");
        imageMode(CENTER);
       // ellipse(0, 0, this.radius, this.radius);
        //image(this.image,pos.x, pos.y,this.radius,this.radius);
        image(this.image, pos.x, pos.y, 50, 50);
        pop();


        
    }*/
}