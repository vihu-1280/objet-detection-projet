cocossd = ""; 

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    
}
function preload() {
    img = loadImage('SHOE BOX.jpg');
}
function BACK(){
    window.location = "index.html" ;
}
function draw(){
    image(img,0,0,500,500);
    rect(40,70,320,400);
    fill("#FF0000");
    text("Shoebox",50,100)
    noFill();
    stroke("#FF0000");
}