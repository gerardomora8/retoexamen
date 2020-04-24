class Pikachu{
  constructor(){
    this.x = 80;
    this.y = 80;
    
    this.dir = 0.3;
    
    this.velx = 6;
    
    this.vely = 6;

    
    this.img = []; 
  
    this.frame = 0;
    
    for(var i = 0; i < 4; i++){
        
    this.img[i] = loadImage("pikachu_"+ i +".gif");

      }
    }
  
  mostrar(){
    push();
    translate(this.x, this.y);
    scale(this.dir, 0.3);
    imageMode(CENTER);
      image(this.img[this.frame], 0 ,0);   
    pop();
    
      } 
  
  arriba(){
    this.frame++;
    this.y = this.y - this.vely;
    this.dir = 0.3;
    if(this.frame > 3){
    this.frame = 0; 
    }
  }
  
  abajo(){
    this.frame++;
    this.y = this.y + this.vely;
    this.dir = -0.3;
    if(this.frame > 3){
    this.frame = 0; 
    }
  }
    
  derecha(){
    this.frame++;
    this.x = this.x + this.velx;
    this.dir = 0.3;
    if(this.frame > 3){
    this.frame = 0; 
    }
  }
  
  izquierda(){
    this.frame++;
    this.x = this.x - this.velx;
    this.dir = -0.3;
    if(this.frame > 3){
    this.frame = 0; 
    }
  }
  
}


  
