/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	Enemy class
*/
var Enemy = function(_blockX, _blockY, _blockW, _blockH) {
			
	var that = this;
	// src, width, height, xPos
	var listOfEnemies = [ ["images/ninja.png", 18, 28, 25] ];

	this.img = new Image();

	var randomImage = randomNumber(0, listOfEnemies.length - 1);
		
		this.img.src = listOfEnemies[randomImage][0];
		that.width = listOfEnemies[randomImage][1];
		that.height = listOfEnemies[randomImage][2];
		that.x = _blockX + randomNumber(0, _blockW - that.width);
		that.y = HEIGHT - randomNumber(that.height, _blockH);

		that.visible = false;

		that.draw = function() {
		that.x -= LEVEL_SPEED;
		if(that.visible)
			_canvasContext.drawImage(this.img, that.x, that.y, that.width, that.height);
	}
};