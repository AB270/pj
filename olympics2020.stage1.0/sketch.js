var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var ps,p1,p2;
var pImage

function preload(){
  pImage=loadImage("images/pl.gif");
 


}

function setup(){
  canvas = createCanvas(displayHeight,displayWidth);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("black")
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}