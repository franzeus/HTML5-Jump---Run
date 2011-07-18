/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	Several useful nice awesome functions
*/
// *** INIT THE GAME *** 
function init() {
	
	canvas = document.getElementById("canvas");
	buffer = document.getElementById("buffer-canvas");

	buffer.width = canvas.width;
	buffer.height = canvas.height;
	
	context = canvas.getContext("2d");
	_canvasContext = buffer.getContext("2d");

	HEIGHT = canvas.height; //- 2;
	WIDTH = canvas.width;		

	hero = new Player();
	hero.setPosition(~~((WIDTH - hero.width) / 2), ~~((HEIGHT - hero.height) / 2));

	level = new Level();
	level.generateBlocks(5);
	level.generateBuildings(6);
	level.generateClouds(5);

	showGimmick();

	score = new Score();

	bg_cloud = new Image();
	bg_cloud.src = "images/clouds.png";

	moon = new Image();
	moon.src = "images/moon.png";

	flash = new Image();
	flash.src = "images/flash.png";

	counter = document.getElementById("counter");
	counter.value = 0;
	
	LEVEL_SPEED = START_SPEED;
  			
	// Background
	gradient1 = _canvasContext.createLinearGradient(0, 0, 0, HEIGHT);
	gradient1.addColorStop(0,   '#000');
	gradient1.addColorStop(1,   '#222');

	var snd = new Audio("hersey.mp3");
	snd.play();

	setInterval(draw, 1000 / 50);
	setInterval(setCounter, 100);
	setInterval(function(){
			$("#fps").val(fps.toFixed(1));
	}, 1000); 
}