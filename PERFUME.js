cocossd = ""; 

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    
}
function preload() {
    img = loadImage('PERFUME.jpg');
}
function BACK(){
    window.location = "index.html" ;
}
function draw(){
    image(img,0,0,500,500);
    rect(150,10,240,480);
    fill("#FF0000");
    text("Perfume",180,220)
    noFill();
    stroke("#FF0000");
}