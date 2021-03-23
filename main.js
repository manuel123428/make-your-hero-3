const { fabric } = require("./fabric");
var canvas=new fabric.Canvas('myCanvas');
block_img_width=30;
block_img_height=30;
playerX=10;
playerY=10;
var player_object="";
var block_img_object="";
function playerUpdate(){
    fabric.Image.fromURL("player.png",function(img){
    player_object=img;
    player_object.scaleToWidth(150)
    player_object.scaleToHeight(150)
    player_object.set({
        top:playerY,
        left:playerX
    });
    canvas.add(player_object);
     });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(img){
    block_img_object=img;
    block_img_object.scaleToWidth(block_img_width);
    block_img_object.scaleToHeight(block_img_height);
    block_img_object.set({
        top:playerY,
        left:playerX
    });
    canvas.add(block_img_object)
     });
}