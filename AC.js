Status = "";
AC_image = "";
objects = []; 

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    
}
function preload() {
    img = loadImage('AC.jpg');
}
function BACK(){
    window.location = "index.html" ;
}
function draw(){
    image(img,0,0,500,500);
    rect(170,200,280,140);
    fill("#FF0000");
    text("Air Conditioner",180,220)
    noFill();
    stroke("#FF0000");
}