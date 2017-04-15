var h1;
var x,y, zaehler, xadd;

function setup() {
    h1 = select("h1");
    x = 0;
    y = 0;
    xadd = 1;
}

function draw() {
    h1.position(x, y);

    x += xadd;
    
    if (x > windowWidth) {
        xadd *= -1;
        y += 10;
    } else if (x < 0) {
        xadd *= -1;
    }
}