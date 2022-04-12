/*
  Author:     Calvin W Feldt
  Start Date: 12 April 2022
  Last Edit:  12 April 2022

  Title: Type Dojo!!

  Description:  TBD

  Purpose: Educational Typing Game (Passion Project!)

*/


// Variables and Definitions
let gameState = "title screen";     // The state the game is currently in.
let fadeAmount = 1;
let fade = 0;
let fade2 = 0;
let lastClickFrame = 0;

function preload() {
  KamikazeFont = loadFont("media/fonts/Kamikaze.ttf");
  Kamikaze3DGradFont = loadFont("media/fonts/Kamikaze3DGradient.ttf");
  koreanCal = loadFont("media/fonts/Korean_Calligraphy.ttf");
  titleImage = loadImage("media/titleDemo.png");
  //backImage = loadImage("media/ninjahideout.gif");
}


function setup() {
  createCanvas(1152, 648);
  imageMode(CENTER);

}


function draw() {
  background(230, 230, 230);



  switch(gameState) {

    case "title screen":
      noStroke();
      fill(0, 0, 0);
      textSize(120);
      text("type dojo", 330, 220);
      fill(0, 0, 0, fade);
      textSize(30);
      textFont(koreanCal);
      if(fade <= 40) fadeAmount = 3;
      if(fade >= 255) fadeAmount = -3;
      fade += fadeAmount;
      text("PRESS ANY BUTTON TO START", 410, 320);
      break;

    case "mode select":
      noStroke();
      fill(0, 0, 0, fade);
      textSize(76);
      if(fade < 255) fade += 3;
      text("Select your challenge", 250, 150);


      // TURN EVERYTHING BELOW HERE INTO AN IF STATEMENT
      textSize(50);

      if(mouseX > 420 && mouseX < 734) {
        if(mouseY > 230 && mouseY < 300) {
          fill(160, 160, 160, fade);
          rect(410, 230, 334, 70, 10);
          fill(0, 0, 0, fade);
          text("Letter Frenzy", 440, 280);
        } else {
          fill(200, 200, 200, fade);
          rect(410, 230, 334, 70, 10);
          fill(80, 80, 80, fade);
          text("Letter Frenzy", 440, 280);
        }
        if(mouseY > 350 && mouseY < 420) {
          fill(160, 160, 160, fade);
          rect(410, 350, 334, 70, 10);
          fill(0, 0, 0, fade);
          text("Wordstars", 466, 400);
        } else {
          fill(200, 200, 200, fade);
          rect(410, 350, 334, 70, 10);
          fill(80, 80, 80, fade);
          text("Wordstars", 466, 400);
        }
        if(mouseY > 470 && mouseY < 540) {
          fill(160, 160, 160, fade);
          rect(410, 470, 334, 70, 10);
          fill(0, 0, 0, fade);
          text("Ninja Discipline", 430, 520);
        } else {
          fill(200, 200, 200, fade);
          rect(410, 470, 334, 70, 10);
          fill(80, 80, 80, fade);
          text("Ninja Discipline", 430, 520);
        }
      } else {
        fill(200, 200, 200, fade);
        rect(410, 230, 334, 70, 10);
        rect(410, 350, 334, 70, 10);
        rect(410, 470, 334, 70, 10);
        fill(80, 80, 80, fade);
        text("Letter Frenzy", 440, 280);
        text("Wordstars", 466, 400);
        text("Ninja Discipline", 430, 520);
      }
      break;
    
    default:
      fill(0, 0, 0);
      textSize(80);
      text("Error", 460, 280);
      textSize(36);
      text("Invalid game mode detected", 340, 350);
      text("Please report error and restart", 310, 400);
  }
}

// Procedures for when the mouse is pressed.
function mousePressed() {

  switch(gameState) {

    case "title screen":
      fade = 0;
      gameState = "mode select";
      break;

    case "mode select":
      gameState = "deez";
      break;
  }
}
