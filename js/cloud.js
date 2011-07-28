/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	Cloud class
*/
var Cloud = function(_x, _y) {
	var that = this;

	this.x = ~~ _x;
	this.y = ~~ _y;
	that.radius = 14;

	that.falling = 0;
	that.fallin = 0;
	that.offsetY = 50;

	that.draw = function() {
		if(clearAfteObject)
			_canvasContext.clearRect(that.x + 68, that.y, 1, 30);		

		that.x -= 0.3;
		_canvasContext.fillStyle = "#CCCCCC";
	    _canvasContext.beginPath();
	    _canvasContext.arc(this.x + 18, this.y + 27, that.radius, 0, Math.PI * 2, true);
	    _canvasContext.arc(this.x + 35, this.y + 25, that.radius + 2, 0, Math.PI * 2, true);
	    _canvasContext.arc(this.x + 52, this.y + 27, that.radius, 0, Math.PI * 2, true);
	    _canvasContext.arc(this.x + 35, this.y + 15, that.radius, 0, Math.PI * 2, true);    
	    _canvasContext.fill();

	    /*
	    // Bullets
	    that.fallin++;
	    _canvasContext.fillStyle = 'rgba(200, 200, 200, 0.4)';

	    if(that.fallin > 10) {
			_canvasContext.fillRect(that.x + 20, that.y + that.offsetY + that.falling, 1, 2);
			_canvasContext.fillRect(that.x + 30, that.y + that.offsetY + that.falling, 1, 2);
			_canvasContext.fillRect(that.x + 40, that.y + that.offsetY + that.falling, 1, 2);
			_canvasContext.fillRect(that.x + 50, that.y + that.offsetY + that.falling, 1, 2);
		}
		if(that.fallin > 20) {
			_canvasContext.fillRect(that.x + 20, that.y + that.offsetY + 10 + that.falling, 1, 2);
			_canvasContext.fillRect(that.x + 30, that.y + that.offsetY + 10 + that.falling, 1, 2);
		}

		if(that.fallin > 30) {
			_canvasContext.fillRect(that.x + 20, that.y + that.offsetY + 20 + that.falling, 1, 2);			
		}
		if(that.fallin > 40)
			that.fallin = 0;
		*/
	};
}