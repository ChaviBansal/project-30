class Block{
  constructor(x, y) {
      super(x,y,50,50);
      this.image= loadImage("block.png");
      this.visiblitiy - 300
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed < 3){
        super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.visiblitiy - this.visibality - 5;
       tint(255, this.visibality);
        image(this.image , thiss.body.position.x , this.body.position.y , 50 ,50);
        pop();
      }
    }
}