canvas=document.getElementById("canva");
ctx=canvas.getContext("2d");

car_height=200;
car_width=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x=50;
car_y=50;

function add() {
	background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;
     rover_imgtag=new Image();
  rover_imgtag.onload=uploadgreencar;
    rover_imgtag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(rover_imgtag,car_x,car_y,car_width,car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y>=0){
        car_y=car_y-10;
       uploadBackground();
   uploadgreencar();}
}

function down()
{
	if(car_y<=600){
        car_y=car_y+10;
       uploadBackground();
   uploadgreencar();}
}

function left()
{
	if(car_x>=0){
        car_x=car_x-10;
       uploadBackground();
   uploadgreencar();}
}

function right()
{
	if(car_x<=800){
        car_x=car_x+10;
       uploadBackground();
   uploadgreencar();}
}
