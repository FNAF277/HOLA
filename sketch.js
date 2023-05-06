var player;
function setup() {
  createCanvas(400,400);
  player = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  if(keyIsDown(LEFT_ARROW)){
    player.position.x=player.position.x-5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.position.x=player.position.x+5;
  }
  if(keyIsDown(UP_ARROW)){
    player.position.y=player.position.y-5;
  }
  if(keyIsDown(DOWN_ARROW)){
    player.postion.y=player.position.y+5;
  }
drawSprites();
}




