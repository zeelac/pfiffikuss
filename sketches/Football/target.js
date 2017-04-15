var targets = [];

function Target(x, y) {
  this.x = x;
  this.y = y;
  this.a = 80
  this.b = 10
  this.r = 50;
  this.toDelete = false;
  
  this.trigger = function() {
    this.show();
  }
  
  this.show = function() {
    fill(255);
    rect(this.x, this.y, this.a, this.b);
  }
  
  this.erase = function() {
    this.toDelete = true;
  }
}