class Box {
  constructor(x,y,width,height) {
    var options = {
        'restitution': 1.0,
        'friction' : 1.0,
        'density' : 1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visibility = 255;
  }

  

  
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill("brown");
    rect(0, 0, this.width, this.height);
    pop();
    
    if(this.body.speed<3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility-5;
      tint(255, this.Visibility);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
  
  }
};