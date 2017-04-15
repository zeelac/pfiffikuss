var spaghettis = [];
var tisch;
var tischset;

function preload() {
 tisch = loadImage("data/tisch.jpg");
 tischset = loadImage("data/tischset.png");
}

function setup() { 
  createCanvas(600, 400);
  frameRate(10);
	 angleMode(DEGREES);
  
  //Tisch *Textur hinterlegen*
	 image(tisch, 0, 0);
	
  //Tischset *noch anpassen*
 imageMode(CENTER);
	image(tischset, width/2, height/2)

  //Teller
  fill(255);
  ellipseMode(CENTER);
  ellipse(width/2, height/2, 280, 280);
  fill(245);
  ellipse(width/2, height/2, 250, 250);
  //Spaghettirelevant
  fill(253);
  ellipse(width/2, height/2, 240, 240);
  
  //Besteck
  	//Gabel
  	rectMode(CORNER);
  	rect(120, 130, 15, 180);

    beginShape();
    curveVertex(145,  125);
    curveVertex(145,  125);
    curveVertex(145,  150);
    curveVertex(110,  150);
    curveVertex(110, 125);
    curveVertex(110, 125);
    endShape(CLOSE);  
  
  	rect(110, 100, 5, 25);
  	rect(120, 100, 5, 25);
  	rect(130, 100, 5, 25);
  	rect(140, 100, 5, 25);
  
  	//Messer
  	rect(465, 130, 15, 180);
  
  	beginShape();
  	curveVertex(465, 210);
  	curveVertex(465, 210);
  	curveVertex(465, 100);
  	curveVertex(490, 150);
  	curveVertex(490, 210);
  	curveVertex(490, 210);
  	endShape(CLOSE);
  
} 


function draw() { 
	spaghettis[frameCount] = new Spaghetti(width/2, height/2, 240);
  spaghettis[frameCount].anzeigen();
}

function Spaghetti(x, y, d) {
  this.tellerX = x;
  this.tellerY = y;
  this.tellerD = d;
  
  this.x = 0;
  this.y = 0;
  this.xtemp = 0;
  this.ytemp = 0;
  
	this.x1 = 0;
  this.y1 = 0;
 	this.x2 = 0;
  this.y2 = 0;
  this.x3 = 0;
  this.y3 = 0;
  this.x4 = 0;
  this.y4 = 0;
  this.x5 = 0;
  this.y5 = 0;
  
  this.arr1 = [];
  this.arr2 = []; 
  this.arr3 = []; 
  this.arr4 = []; 
  this.arr5 = []; 
  
  this.anzeigen = function() {
  	this.werteGenerieren();
    translate(this.tellerX-this.tellerD/2, this.tellerY-this.tellerD/2);
    strokeWeight(5);
    stroke(238, 198, 96);
    line(this.x1, this.y1, this.x2, this.y2);
  }
  
  this.werteGenerieren = function() {
  	this.arr1 = this.wertFunktion();
    this.x1 = this.arr1[0];
    this.y1 = this.arr1[1];
    console.log(this.x1 + " " + this.y1);
    
    this.arr2 = this.wertFunktion();
    this.x2 = this.arr2[0];
    this.y2 = this.arr2[1];
    
    this.arr3 = this.wertFunktion();
    this.x3 = this.arr3[0];
    this.y3 = this.arr3[1];
    
    this.arr4 = this.wertFunktion();
    this.x4 = this.arr4[0];
    this.y4 = this.arr4[1];
    
    this.arr5 = this.wertFunktion();
    this.x5 = this.arr5[0];
    this.y5 = this.arr5[1];
    }
  	
  
  this.wertFunktion = function() {
    this.xtemp = random(0, 180);
    if (this.xtemp < 90) {
      this.ytemp = map(this.xtemp, 0, 90, 1, 0);
      this.ytemp = sqrt(1 - pow(this.ytemp, 2));
      this.ytemp = map(this.ytemp, 0, 1, 90, 0);
    } else if (this.xtemp > 90) {
      this.ytemp = map(this.xtemp, 90, 180, 0, 1);
      this.ytemp = sqrt(1 - pow(this.ytemp, 2));
      this.ytemp = map(this.ytemp, 0, 1, 90, 0);
    } else {
      this.ytemp = 0;
    }
    this.ytemp = random(this.ytemp, 180-this.ytemp);
    
    
    this.y = map(this.ytemp, 0, 180, 0, this.tellerD);
    this.x = map(this.xtemp, 0, 180, 0, this.tellerD);
    return [this.x, this.y];
  }
}