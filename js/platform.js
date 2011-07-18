/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	Platform class
*/
var Platform = function(x, _w, _h) {
	var that = this;

	that.onCollide = function(){
		hero.fallStop();
		//hero.y = this.y - hero.height;	
	};

	that.notOnCollide = function() {
		if ((hero.x > that.x + that.width) || (hero.x + hero.width < that.x)) {
			hero.isFalling = true;					
		}								
	};

	this.width = _w;
	this.height = _h;
	this.x = ~~ x;
	this.y = HEIGHT - that.height;
	this.angle = 0;

	that.specialFigur = null;

	//that.img = new Image();
	//that.img.src = "tree.png"; 
		
	that.draw = function() {
		that.x -= LEVEL_SPEED;

		if(that.x <= 230) {
     		that.y += 2;
      		that.angle -= 0.005;
    	}
		
		if(clearAfteObject)
			_canvasContext.clearRect(that.x-1, that.y, 1, that.height);

		
		_canvasContext.save();
	    _canvasContext.rotate(that.angle);
	    
		_canvasContext.fillStyle = 'rgba(50, 50, 80, 1)';
		_canvasContext.fillRect(that.x, that.y, that.width, that.height);

	    _canvasContext.restore();

		
		if(that.specialFigur != null)
			_canvasContext.drawImage(that.specialFigur.img, this.x + this.width - that.specialFigur.x, HEIGHT - that.specialFigur.height, that.specialFigur.width, that.specialFigur.height);
	
		//_canvasContext.drawImage(this.img, this.x - 100 , HEIGHT - 44, 36, 44);
	};

	that.addSpecialFigure = function() {				
		if(randomNumber(0,10) < 4)
			that.specialFigur = new SpecialFigur();
		else
			that.specialFigur = null;
	}

	return that;
};