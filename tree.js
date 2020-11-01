class Tree {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 700;
        this.height = 700;
        World.add(world, this.body);
        this.image=loadImage("tree.png");
       
    }

    display() {
        var pos = this.body.position;
        push();
      //  fill("brown");
       // translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
        pop();
    }
   /*addPic(){

        var pos = this.body.position;
        push();
        fill("brown");
       image(this.image,pos.x,pos.y,width,height);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();



    }*/
}
