/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	Special Figur class
*/
var SpecialFigur = function() {
	var that = this;

	//["images/disco.png", 120, 45, 120]["images/grid.png", 150 , 30, 0],
	var listOfImages = [ 
						 ["images/lamp.png", 50, 45, 40],
						 ["images/tree.png", 36 , 44, -50]						 						 
						];

	this.img = new Image();		

	var randomImage = randomNumber(0, listOfImages.length - 1);

	that.y = 0;
	this.img.src = listOfImages[randomImage][0];
	that.width = listOfImages[randomImage][1];
	that.height = listOfImages[randomImage][2];
	that.x = listOfImages[randomImage][3];

};