cocossd = ""; 

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    
}
function preload() {
    img = loadImage('GLUCOND.jpg');
}
function BACK(){
    window.location = "index.html" ;
}
function draw(){
    image(img,0,0,500,500);
    rect(10,5,480,480);
    fill("#000000");
    text("Glucon-D",10,20)
    noFill();
    stroke("#000000");
}