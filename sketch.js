//PRO C21 Funciones, Valores Booleanos y Creación de Librerías
var fijo, movil;
var gameobject1, gameobject2, gameobject3, gameobject4, gameobject5;
var obj1, obj2;
var object1, object2;

function setup() {
  createCanvas(400,400);
  fijo= createSprite(200, 200, 50, 50);
  fijo.shapeColor="green";
  fijo.debug=true;
  movil= createSprite(200, 100, 50, 50);
  movil.shapeColor="green";
  movil.debug=true;

       //D) crea objetos que puedan colisionar en el juego
  gameobject1= createSprite(50, 110, 50, 50);
  gameobject1.shapeColor="green";
  gameobject2= createSprite(100, 350, 50, 50);
  gameobject2.shapeColor="green";
  gameobject3= createSprite(180, 90, 50, 50);
  gameobject3.shapeColor="green";
  gameobject4= createSprite(350, 300, 50, 50);
  gameobject4.shapeColor="green";
  gameobject5= createSprite(350, 80, 50, 50);
  gameobject5.shapeColor="green";
}

function draw() {
  background(51);  
  movil.x=mouseX;
  movil.y=mouseY; 

  if(isTouching(movil,gameobject1)){
    movil.shapeColor = "yellow";
    gameobject1.shapeColor = "orange";
    gameobject1.debug=true;
  }
  else{
    movil.shapeColor="green";
    gameobject1.shapeColor="green";
    gameobject1.debug=false;
  }
  drawSprites();
}


       // B) Crea función isTouching
      // Agrego argumentos object1 y object2 a mi función 
function isTouching(obj1,obj2){
     //A) agrega  condición de colisión
     //Cambio los valores a que tengan el mismo nombre que los argumentos
  if(obj1.x - obj2.x < obj1.width/2 + obj2.width/2 &&
     obj2.x - obj1.x < obj1.width/2 + obj2.width/2 &&
     obj1.y - obj2.y < obj1.height/2 + obj2.height/2 &&
     obj2.y - obj1.y < obj1.height/2 + obj2.height/2) {

       //Ca) en lugar de cambiar color a objetos devuelve valor booleano
       return true;
  }
 else {
       //Ca 
    return false;
 }
}
