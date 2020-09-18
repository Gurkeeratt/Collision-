var fixedrectangle,movingrectangle;


function setup() {
  createCanvas(1200,800);
  fixedrectangle  = createSprite(400, 200, 50, 50);
  fixedrectangle.shapeColor = "green"; 

  movingrectangle = createSprite(300,600,50,50) ;
  movingrectangle.shapeColor = "red";
}

function draw() {
  background("orange"); 
  
  movingrectangle.x = World.mouseX;
  movingrectangle.y = World.mouseY;

  if (movingrectangle.x - fixedrectangle.x <fixedrectangle.width /2 + movingrectangle.width/2
  && fixedrectangle.x - movingrectangle.x <fixedrectangle.width /2 + movingrectangle.width/2 
  && fixedrectangle.y - movingrectangle.y <fixedrectangle.height /2 + movingrectangle.height/2 
  && movingrectangle.y - fixedrectangle.y <fixedrectangle.height /2 + movingrectangle.height/2) 

  {
    fixedrectangle.shapeColor = "blue";
    movingrectangle.shapeColor = "blue";
  } 
  else 
  {
    fixedrectangle.shapeColor = "green"; 
    movingrectangle.shapeColor = "red";
  }

  drawSprites();
}
