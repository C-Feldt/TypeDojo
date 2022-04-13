/*
  Author:     Calvin W Feldt
  Start Date: 12 April 2022
  Last Edit:  12 April 2022

  Title: Type Dojo!!

  Description:  TBD

  Purpose: Educational Typing Game (Passion Project!)

*/

// Variables: Definitions
//
// gameState: decides the application's current stage; controls the entire program's behavior
// fade1: variable for controlling the fade in and out of assets
// fade2: alternate to fade1
// fadeAmount: the amount that the fade should change in each cycle
// gameStateTemp: temporary gameState variable to allow the usage of the same transition.
let gameState = "title screen";
let fade1 = 255;
let fade2 = 255;
let fadeAmount = 1;
let gameStateTemp = "temp";


function preload() {
  // Fonts
  KamikazeFont = loadFont("media/fonts/Kamikaze.ttf");
  Kamikaze3DGradFont = loadFont("media/fonts/Kamikaze3DGradient.ttf");
  koreanCal = loadFont("media/fonts/Korean_Calligraphy.ttf");
  // Pictures and Sprites
  titleImage = loadImage("media/titleDemo.png");
}


function setup() {
  createCanvas(1152, 648);
  imageMode(CENTER);

}


function draw() {
  background(230, 230, 230);

  // This program operates around switch statements to decide what gameState actions should be taken.
  // A corresponding switch statement exists within the "mouseClicked" to designate actions based upon
  // the layout provided by this statement.
  // Generally, the gameState will progress from top to bottom, with the exception of Game Modes.
  switch(gameState) {

    case "title screen":        // The opening screen
      textFont(koreanCal);      // Any button can be pressed to advance the gameState
      noStroke();
      fill(0, 0, 0);
      textSize(120);
      text("type dojo", 330, 220);
      fill(0, 0, 0, fade1);
      textSize(45);
      if(fade1 <= 40) fadeAmount = 3;
      if(fade1 >= 255) fadeAmount = -3;
      fade1 += fadeAmount;
      text("CLICK TO START", 450, 320);
      break;

    case "transition1":         // Transitional phase between title screen and mode select
      textFont(koreanCal);      // No inputs required; gameState will progress to mode select automatically
      noStroke();
      fill(0, 0, 0, fade2);
      textSize(120);
      text("type dojo", 330, 220);
      fill(0, 0, 0, fade1);
      textSize(45);
      text("CLICK TO START", 450, 320);
      fadeAmount = -3
      if(fade1 > 1) fade1 += fadeAmount;
      if(fade2 > 1) fade2 += fadeAmount;
      if(fade1 <= 1 && fade2 <= 1) gameState = 'mode select';
      break;

    case "mode select":         // Screen allowing the user to select the game mode
      noStroke();
      fill(0, 0, 0, fade1);
      textSize(76);
      if(fade1 < 255) fade1 += 3;
      text("Select your challenge", 250, 150);
      textSize(50);

      if(mouseX > 420 && mouseX < 734) {
        if(mouseY > 230 && mouseY < 300) {
          fill(160, 160, 160, fade1);
          rect(410, 230, 334, 70, 10);
          fill(0, 0, 0, fade1);
          text("Letter Frenzy", 440, 280);
        } else {
          fill(200, 200, 200, fade1);
          rect(410, 230, 334, 70, 10);
          fill(80, 80, 80, fade1);
          text("Letter Frenzy", 440, 280);
        }
        if(mouseY > 350 && mouseY < 420) {
          fill(160, 160, 160, fade1);
          rect(410, 350, 334, 70, 10);
          fill(0, 0, 0, fade1);
          text("Wordstars", 466, 400);
        } else {
          fill(200, 200, 200, fade1);
          rect(410, 350, 334, 70, 10);
          fill(80, 80, 80, fade1);
          text("Wordstars", 466, 400);
        }
        if(mouseY > 470 && mouseY < 540) {
          fill(160, 160, 160, fade1);
          rect(410, 470, 334, 70, 10);
          fill(0, 0, 0, fade1);
          text("Ninja Discipline", 430, 520);
        } else {
          fill(200, 200, 200, fade1);
          rect(410, 470, 334, 70, 10);
          fill(80, 80, 80, fade1);
          text("Ninja Discipline", 430, 520);
        }
      } else {
        fill(200, 200, 200, fade1);
        rect(410, 230, 334, 70, 10);
        rect(410, 350, 334, 70, 10);
        rect(410, 470, 334, 70, 10);
        fill(80, 80, 80, fade1);
        text("Letter Frenzy", 440, 280);
        text("Wordstars", 466, 400);
        text("Ninja Discipline", 430, 520);
      }
      break;
    
    case "transition2":
      noStroke();
      fill(0, 0, 0, fade1);
      textSize(76);
      text("Select your challenge", 250, 150);
      textSize(50);
      fill(200, 200, 200, fade1);
      rect(410, 230, 334, 70, 10);
      rect(410, 350, 334, 70, 10);
      rect(410, 470, 334, 70, 10);
      fill(80, 80, 80, fade1);
      text("Letter Frenzy", 440, 280);
      text("Wordstars", 466, 400);
      text("Ninja Discipline", 430, 520);
      fadeAmount = -3;
      if(fade1 > 1) fade1 += fadeAmount;
      if(fade1 <= 1) gameState = gameStateTemp;
      break;

    default:
      fill(0, 0, 0);
      textSize(80);
      text("Error", 460, 280);
      textSize(36);
      text("Invalid game mode detected", 340, 350);
      text("Please report error and restart", 310, 400);
      break;
  }
}

// Procedures for when the mouse is pressed.
function mousePressed() {

  switch(gameState) {

    case "title screen":  
      gameState = "transition1";
      break;

    case "mode select":
      if(mouseX > 420 && mouseX < 724) {
        if(mouseY > 230 && mouseY < 300) {
          gameStateTemp = "letter frenzy";
          gameState = "transition2";
        } else if(mouseY > 350 && mouseY < 420) {
          gameStateTemp = "wordstars";
          gameState = "transition2";
        } else if(mouseY > 470 && mouseY < 540) {
          gameStateTemp = "ninja discipline";
          gameState = "transition2";
        }
      }
      break;
  }
}
