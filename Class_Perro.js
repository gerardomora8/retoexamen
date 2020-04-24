class Perro{
  constructor(){
    this.x = 400;
    this.y = 80;
    
    this.dir = 0.5;
    
    this.velx = 6;
    
    this.vely = 6;

    
    this.img = []; 
  
    this.frame = 0;
    
    for(var i = 0; i < 7; i++){
        
    this.img[i] = loadImage("Perro_"+ i +".gif");

      }
    }
  
  mostrar(random){
    push();
      translate(this.x, this.y);
        scale(this.dir, 0.5);
          imageMode(CENTER);
            image(this.img[this.frame], 0 ,0);                             pop();
    
      } 
    
  arriba(){
    this.frame++;
    this.y = this.y - this.vely;
    this.dir = 0.5;
    if(this.frame > 6){
    this.frame = 0; 
    }
  }
  
  abajo(){
    this.frame++;
    this.y = this.y + this.vely;
    this.dir = -0.5;
    if(this.frame > 6){
    this.frame = 0; 
    }
  }
  
  
  derecha(){
    this.frame++;
    this.x = this.x + this.velx;
    this.dir = 0.5;
    if(this.frame > 6){
    this.frame = 0; 
    }
  }
  
  izquierda(){
    this.frame++;
    this.x = this.x - this.velx;
    this.dir = -0.5;
    if(this.frame > 6){
    this.frame = 0; 
    }
  }
  
}
