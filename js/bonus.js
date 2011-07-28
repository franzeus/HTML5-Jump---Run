/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	Bonus class
*/
var Bonus = function(_x, _y, type){
	var that = this;

	that.onCollide = function(index){
		if(that.visible == true) {
			score.addPoints(that.points);		
			$("#counter").fadeOut().fadeIn();		
		}
		that.visible = false;
	};

	var bonusTypes = [ ["#008800", 100], ["#880000" , 150], ["#ffff00" , 200] ];

	this.width = 5;
	this.height = 5;
	this.x = ~~ _x;
	this.y = ~~ _y;

	// Later for rotation
	this.startY = ~~ _y;
	this.startX = ~~ _x;
	this.degree = 180;

	var randomType = randomNumber(0, bonusTypes.length - 1);

	that.color = bonusTypes[randomType][0];
	that.points = bonusTypes[randomType][1];

	that.visible = false;
	if(randomNumber(1,10) > 9)
		that.visible = true;

	that.draw = function() {
		that.x -= LEVEL_SPEED;		

		if(that.visible == true) {
			_canvasContext.fillStyle = that.color;//'rgba(80, 150, 80, 1)';
			_canvasContext.fillRect(that.x, that.y, that.width, that.height);				
		}
		/*_canvasContext.drawImage(this.img, this.x , this.y, this.width, this.height);*/
	};

	return that;
};