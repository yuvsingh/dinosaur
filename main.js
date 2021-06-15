var canvas=document.getElementById("Dinosaur");

ctx=canvas.getContext("2d");
Trex_images=["forest_image_1.jpeg","forest_image_2.jpeg","forest_image_3.jpeg","forest_image_4.jpeg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
dino_width=100;
dino_height=90;
bg_image=Trex_images[random_number];
dino_image="Trex running.png";
dino_x=10;
dino_y=10;
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=bg_image;

    dino_imgTag=new Image();
    dino_imgTag.onload=Uploadrover;
    dino_imgTag.src=dino_image;
}
function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function Uploadrover(){
    ctx.drawImage(dino_imgTag,dino_x,dino_y,dino_width,dino_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="37")
    {
  Left();
  console.log("Left");
    }
    if (keyPressed=="38"){
        up();
        console.log("up");
    }
    if (keyPressed=="39")
    {
        Right();
        console.log("right");
    }
    if (keyPressed=="40"){
        down();
        console.log("down");
    }}
    
function Left(){
    if (dino_x>=0){
        dino_x=dino_x-10;
        uploadBackground();
        Uploadrover();
    }
    
}
function up(){
    if (dino_y>=0){
        dino_y=dino_y-10;
        uploadBackground();
        Uploadrover();
    }
}
function Right(){
    if (dino_x<=700){
        dino_x=dino_x+10;
        uploadBackground();
        Uploadrover();
    }
}
function down(){
    if (dino_y<=500){
        dino_y=dino_y+10;
        uploadBackground();
        Uploadrover();
    }
}