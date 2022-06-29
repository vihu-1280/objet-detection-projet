cocossd = ""; 

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    
}
function preload() {
    img = loadImage('PAPER BAG.jpg');
}
function BACK(){
    window.location = "index.html" ;
}
function draw(){
    image(img,0,0,500,500);
    rect(140,100,250,300);
    fill("#FF0000");
    text("Paper Bag",180,220)
    noFill();
    stroke("#FF0000");
}