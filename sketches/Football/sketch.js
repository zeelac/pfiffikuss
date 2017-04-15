var socket;

function setup() {
  //Server
  socket = io.connect('http://localhost:3000')

  //Setup
  createCanvas(400, 600);

  //Bar
  var bar = new Bar(width / 2, height - 20);
  bars.push(bar);

  //Ball
  for (var i = 0; i < 1; i++) {
    var ball = new Ball(200, 300);
    balls.push(ball);
  }

  //Target
  for (var i = 0; i < 5; i++) {
    var target = new Target(i*100 + 20, 60);
    targets.push(target);
  }
}


function draw() {

  //Background
  background(0);

  //Bar
  for (var i = 0; i < bars.length; i++) {
    bars[i].trigger();
  }


  //Ball
  for (var i = 0; i < balls.length; i++) {
    balls[i].trigger();
  }

  //Target
  for (var i = 0; i < targets.length; i++) {
    targets[i].trigger();
  }

  for (var i = targets.length-1; i >= 0; i--) {
    if (targets[i].toDelete) {
      targets.splice(i, 1);
    }
  }
}
