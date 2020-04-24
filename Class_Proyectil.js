class Proyectil{
  constructor(){
    this.x = 100;
    this.y = 100;
    
    this.dir = 0.3;
    
    this.velx = 4;

    this.img = loadImage("proyectil_0.gif");
  
    
  
    }
  
  mostrar(){
    translate(this.x, this.y);
    scale(this.dir, 0.3);
    imageMode(CENTER);
    
      } 
  
  derecha(){
    this.x = this.x + this.velx;
    this.dir = 0.3;    
  }
  
  izquierda(){
    this.x = this.x - this.velx;
    this.dir = -0.3;
    
  }
  
}
