cocossd = ""; 

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    
}
function preload() {
    img = loadImage('PICTURE.jpg');
}
function BACK(){
    window.location = "index.html" ;
}
function draw(){
    image(img,0,0,500,500);
    rect(30,0,460,470);
    fill("#FF0000");
    text("Picture",60,20)
    noFill();
    stroke("#FF0000");
}