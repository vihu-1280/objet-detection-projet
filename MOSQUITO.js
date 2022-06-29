cocossd = ""; 

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    
}
function preload() {
    img = loadImage('MQSQUITORACKET.jpg');
}
function BACK(){
    window.location = "index.html" ;
}
function draw(){
    image(img,0,0,500,500);
    rect(140,50,280,450);
    fill("#FF0000");
    text("Mosquito Racket",150,80)
    noFill();
    stroke("#FF0000");
}