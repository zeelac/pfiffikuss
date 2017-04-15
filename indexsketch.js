function setup() {
    frameRate(3);
    var h1 = selectAll("h1");
    var x = 100;
    var y = 100;
}

function draw() {
    h1.position(x, y);
    x += 1;
    y += 1;
}