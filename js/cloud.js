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
	};
}