cocossd = ""; 

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    
}
function preload() {
    img = loadImage('WAREDROBE.jpg');
}
function BACK(){
    window.location = "index.html" ;
}
function draw(){
    image(img,0,0,500,500);
    rect(30,0,380,490);
    fill("#FF0000");
    text("Waredrobe",40,30)
    noFill();
    stroke("#FF0000");
}