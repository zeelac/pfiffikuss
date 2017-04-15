var bars = [];


function Bar(x, y) {
  this.x = x;
  this.y = y;
  this.a = 100;
  this.b = 5;
  this.col = color(255);
  this.xspeed = 7;

  this.trigger = function() {
    this.show();
    this.update();
    this.move();
  }

  this.move = function() {
    var data = {
    x: this.x,
    y: this.y
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5
      console.log('Sending: ' + this.x + ',' + this.y);
      socket.emit('key', data);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5
      console.log('Sending: ' + this.x + ',' + this.y);
      socket.emit('key', data);
    }
  }




  this.update = function() {
    this.x = constrain(this.x, 0, width-this.a);
    this.y = constrain(this.y, 0, height-this.b);
  }

  this.show = function() {
    stroke(255);
    fill(255);
    rect(this.x, this.y, this.a, this.b);
  }
}
