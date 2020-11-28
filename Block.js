class Block{
    
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y, 30, 40,options);
      World.add(world, this.body);
    }


    display_grey(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(128, 128, 128);
      rect(pos.x, pos.y,30, 40);
    }


    display_pink(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255, 192, 203);
      rect(pos.x, pos.y, 30, 40);
    }


    display_blue(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(135, 206, 234);
      rect(pos.x, pos.y, 30, 40);
    }


    display_turquoise(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(63, 224, 208);
      rect(pos.x, pos.y, 30, 40);
    }
  

}