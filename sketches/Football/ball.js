var balls = [];

function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.r = 15;
  this.d = this.r * 2;
  this.col = color(255);
  this.xspeed = 5;
  this.yspeed = 5;


  this.trigger = function() {
    this.shape();
    this.move();
    this.bounce();
  }






  this.shape = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.d, this.d);
  }

  this.move = function() {
    this.y = this.y + this.yspeed;
    this.x = this.x + this.xspeed;
  }

  this.bounce = function() {
    if (this.x > width - this.r || this.x < this.r) {
      this.xspeed = this.xspeed * -1;

    }

    if (this.y < this.r) {
      this.yspeed = this.yspeed * -1;
    }

    for (var i = 0; i < bars.length; i++) {
      if (this.x > bars[i].x && this.x < bars[i].x + bars[i].a && this.y + this.r >= bars[i].y) {
        this.yspeed = this.yspeed * -1;
      }
    }

    for (var i = 0; i < targets.length; i++) {
      if (this.x > targets[i].x && this.x < targets[i].x + targets[i].a && this.y - this.r <= targets[i].y + targets[i].b) {
        this.yspeed = this.yspeed * -1;
      }
    }
  }

  this.hits = function(target) {
    for (var i = 0; i < targets.length; i++) {
      if (this.x > targets[i].x && this.x < targets[i].x + targets[i].a && this.y - this.r <= targets[i].y + targets[i].b) {
        this.yspeed = this.yspeed * -1;
      return true;
      } else {
      return false;
      }
    }
  }
}
