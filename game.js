var myPlayer;
var square;
var x;
var y;

function Game()
{
	initCanvas();
	myPlayer = new Player();
}

Game.prototype.test = function(e)
{
	console.log("test");
	console.log(e.keyCode);
	if(e.keyCode == 100)
	{
		myPlayer.moveRight();
	}
}


Game.prototype.gameLoop = function()
{
	console.log("gameLoop");
	window.requestAnimationFrame(game.gameLoop);
	ctx.clearRect(0,0,canvas.width, canvas.height);
	myPlayer.draw();
	myPlayer.CollisionCheck();

	if (myPlayer.CollisionCheck() == true)
	{
		respond();
	}
}

Game.prototype.respond = function()
{
	ctx.fillText("You Win", 600, 100);
}

function initCanvas()
{
	canvas = document.createElement("canvas");
	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);
	//Canvas width, height
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

////////////////////////////////////////////////////////////

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