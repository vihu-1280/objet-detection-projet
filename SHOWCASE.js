cocossd = ""; 

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    
}
function preload() {
    img = loadImage('SHOWCASE.jpg');
}
function BACK(){
    window.location = "index.html" ;
}
function draw(){
    image(img,0,0,500,500);
    rect(1,35,499,390);
    fill("#FF0000");
    text("Showcase",11,59)
    noFill();
    stroke("#FF0000");
}