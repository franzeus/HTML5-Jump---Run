/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	Special Figur class
*/
var Gimmick = function() {
	var that = this;

	var listOfImages = [ ["images/jetLeft.png", 111, 30, 480, 40] ];
	var randomImage = randomNumber(0, listOfImages.length - 1);
	
	this.img = new Image();
	this.img.src = listOfImages[randomImage][0];
	that.width = listOfImages[randomImage][1];
	that.height = listOfImages[randomImage][2];
	that.x = listOfImages[randomImage][3];
	that.y = listOfImages[randomImage][4];

	// ------------------------
	that.draw = function() {
		that.x -= LEVEL_SPEED;
		_canvasContext.drawImage(this.img, that.x, that.y, that.width, that.height);
	};
};