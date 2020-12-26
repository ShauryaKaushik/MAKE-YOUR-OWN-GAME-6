var database;
var form, player, game;
var playerCount;
var gameState = 0;
var allPlayers;
var player1,player2;
var players = [];
var runningMan;
var backgroundImg;
var obstacles;

function preload(){

runningMan = loadAnimation("images/Running man 1.png","images/Running man 2.png","images/Running man 3.png","images/Running man 4.png","images/Running man 5.png","images/Running man 6.png");
backgroundImg = loadImage("images/background.png");


}


function setup() {
  createCanvas(displayWidth,displayHeight);
  if(touches.length > 0 || keydown("RIGHT_ARROW")){
    player.distance +=10;
    player.update();
  }
  database = firebase.database();

  game = new Game();
  game.readState();
  game.start();
  }


function draw() {
  background(255,255,255); 
  
  if(playerCount === 2){
     game.updateState(1);
    
  }

  if(gameState === 1){
     game.play();
     
  }

}