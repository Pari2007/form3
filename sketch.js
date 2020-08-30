var canvas, database, backimg, playerCount;
var form, player, game, backimage;
var gameState = 0;
function preload() {
  backimage = loadImage("back.jpg");
}
function setup() {
  database = firebase.database();
  canvas = createCanvas(displayWidth, displayHeight);
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backimage);
}
