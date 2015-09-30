var canvas;
var ctx;
var x;
var y;

function Player()
{
	x=5;
	y=5;
}

Player.prototype.moveRight = function()
{
	x = x + 5;
}

Player.prototype.draw = function()
{
	ctx.fillStyle = rgb(5,5,5);
	ctx.fillRect(x,y,100,100);
	ctx.fillRect(500,y,100,100);
	ctx.font = 'italic 40pt Calibri';
}

Player.prototype.CollisionCheck = function()
{
	var collides = false;

	if(x > 400)
	{
		ctx.fillText("#GG", 50,50);
		collides = true;
	}
	return collides;
}

/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}