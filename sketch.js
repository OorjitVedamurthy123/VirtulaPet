var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  puppy = loadImage("images/dogImg.png");
  happyPuppy = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage(puppy);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyPuppy);
  }
  drawSprites();
  text("Food remaining : "+foodStock)

}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

