/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	*** DRAW THE GAME ***
*/
function draw() {
	if(!clearAfteObject)
		clear();

	// Draw Background-Gradient
	_canvasContext.fillStyle = gradient1;
	_canvasContext.fillRect(0, 0, WIDTH, HEIGHT);

	// Moon
	_canvasContext.drawImage(moon, 100, 20);

	// Gimmick
	if(showFlash == true)
		_canvasContext.drawImage(flash, 120, 0);

	// Clouds			
	clouds.forEach(function(cloud) {
		cloud.draw();
	});

	// Skyscrapers
	skyscrapers.forEach(function(skyscraper) {
		skyscraper.draw();
	});	

	checkCollision();
		
	// Platforms
	platforms.forEach(function(platform) {
		platform.draw();
	});	

	// Bonus
	bonis.forEach(function(bonus) {
		bonus.draw();
	});		

	// Enemies
	enemies.forEach(function(enemy) {
		enemy.draw();
	});	

	// Draw Player
	if (hero.isJumping) hero.checkJump();
	if (hero.isFalling) hero.checkFall();
	hero.draw();

	_canvasContext.fillStyle = "#CCC";
	_canvasContext.fillRect(0, HEIGHT, WIDTH, 2);

	// Update Level
	level.update();

	context.drawImage(buffer, 0, 0);

	// FPS CHECK
	var thisFrameFPS = 1000 / ((now=new Date) - lastUpdate);
	fps += (thisFrameFPS - fps) / fpsFilter;
	lastUpdate = now;
};