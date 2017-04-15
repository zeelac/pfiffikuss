//var webTitle;

function setup() {
  webTitle = "pfiffikus";
  
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 0, 100);
  x = windowWidth/2;
  y = 40;
  textSize(40);
  textAlign(CENTER);
  fill(0); 
  text(webTitle,x,y);
 
  //webTitle.position(x, y);
}
