var player, back;
var points = 0;
var backImg;
var leftPlayerImg;
var rightPlayerImg;
var gameState= "START";
var baseImg, baseGroup;
var goodImg, goodThingsGroup;
var badImg, badThingsGroup;

//Función para cargar imágenes y animaciones
function preload() {
  rightPlayerImg = loadAnimation("rabbitRight.png")
  baseImg = loadImage("base.png")
 
}
//Función para declarar Sprites y grupos
function setup() {
  createCanvas(450,800);
  player = createSprite(225,520,20,20)
}
//Función para dibujar los Sprites y establecer reglas del juego
function draw() {
  background(220);
  drawSprites();

    
  }
  
 
  
  //Puntuación 
 
  //Inicio del juego
  if(gameState==="START"){
    
    gameState = "PLAY";
      
    //Velocidad y cambio de estado 
    
     }
  
  if(gameState==="PLAY"){
    //Fondo infinito
   
    //gravedad
    player.velocityY = player.velocityY +0.2;
     
    //Mover personaje con las flechas 
      if(keyDown("d")){
    player.x = player.x+5
  
  }
  if(keyDown("a")){
    player.x = player.x-5
  }
  if(keyDown("w")){
    player.velocityY = -4;
    
    //crear bases y hacer que el personaje quede sobre ellas
    createBases();
    baseImg = loadImage()
    
    //Aumentar puntos
    
    //crear Cosas Malas 
      
    //Cambiar a estado GAMEOVER
    
  }
  
  //Estado GAMEOVER 
  
  if(gameState==="GAMEOVER"){
     }
  

}

//Función para crear bases 
function createBases(){
   if(frameCount % 100 === 0){
     var base = createSprite(random(50,400),0,70,20)
        base.velocityY = 2
   }
}

//Función para crear Cosas Malas 

function createBadThings(){
  var velo = 3;
  if(frameCount % 75 === 0){
     
}
}

//Función para eliminar CosasBuenas
function removeGoodThings(sprite,goodThingsGroup ){
 
}

