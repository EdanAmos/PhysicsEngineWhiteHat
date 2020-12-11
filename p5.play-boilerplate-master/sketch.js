const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


var engine, world;
var ground;
var ball;
function setup() {
  var canvas=  createCanvas(400,400);
  engine = Engine.create();
  //my world is also my engine's world
  world= engine.world;

  ground_option ={
    isStatic:true
  }

  ground = Bodies.rectangle(200,350,400,5,ground_option);
  World.add(world,ground);

  console.log(ground);
  
ball_options = {restitution:1}

ball = Bodies.circle(300,-10,50,ball_options);  
World.add(world,ball);
 }
 
 
 function draw() {
   background(0); 
   Engine.update(engine);
   rectMode(CENTER);
   rect(ground.position.x, ground.position.y,400,5);
   ellipseMode(CENTER);
   ellipse(ball.position.x, ball.position.y,50,50);
 }