var player1; 
var player2 = [];
var bala;


function setup(){
  createCanvas(500, 500);
  frameRate(12); 
  player1 = new Pikachu();
  
  for(var i = 0; i < 1; i++){
  player2[i] = new Perro();
    
  }
  
  bala = new Proyectil();
  
  
}

function draw(){
  background(255);
  
  player1.mostrar();
    if(keyCode == 87){
      player1.arriba();
    }
    
    if(keyCode == 83){
      player1.abajo();
    }
  
  if(keyCode == 65){
      player1.izquierda();
    }
    
    if(keyCode == 68){
      player1.derecha();
    }
  
for(var i = 0; i < player2.length; i++){
    
  
    player2[i].mostrar();
    if(keyCode == 73){
      player2[i].arriba();
  }
  
    if(keyCode == 75){
      player2[i].abajo();
  }
  
    if(keyCode == 74){
      player2[i].izquierda();
    }
    
    if(keyCode == 76){
      player2[i].derecha();
    }
  
}
    
  
  //bala.mostrar();
  
  
  
}

