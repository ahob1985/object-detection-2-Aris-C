// Author: Aris C 

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;

// Global ML Variables
let detector;
let video;
let detections;
let isModelReady;

function setup() {
canvasDiv(); = createDiv();
canvas = createCanvas(640, 480);
canvas.parent(canvasDiv);
textDiv  = createDiv();
textP = ("Model is loading please wait...");
textP.parent(textDiv);
//load Video
video = createCapture(VIDEO, videoReady);
detections = [];
isModelReady = false;


}

function draw() {
 
 if(isModelReady){ 
    image(video, 0, 0);
   detector.detect(canvas, gotResults);
 }
}

function videoReady() {
  video.style = ("display", "none");
  dectector = ml5.objectDetector("cocossd", modelReady);
}

function modelReady() {
  isModelReady = true
}

function drawLabel(object) {
  // Draw a rectangular outline around the object
  stroke(90, 125, 220);
  noFill();
  rect(object.x, object.y, object.width, object.height);

  // Draw the label and its confidence value near the object
  fill(0, 0,200);
  textSize(21);
  let label = object.label
  let confidence = floor(object.confidence*100);
  text(label + ": " + confidence + " %" + object.x + 5, object.y + 20);

function gotResults(error, results) {
  if(error){
    console.error(error);

  } else {
    textP.html
  }
}
