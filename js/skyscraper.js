/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	Skyscraper class
*/
var Skyscraper = function(x){
			var that = this;

			this.width = buildingWidths[randomNumber(0, buildingWidths.length -1)];
			this.height = buildingHeights[randomNumber(0, buildingHeights.length -1)];
			this.x = ~~ x;
			this.y = HEIGHT - that.height;
			that.alpha = alphaValues[randomNumber(0, alphaValues.length - 1)];

			that.antenne = false;
			if(randomNumber(1,10) > 7)
				that.antenne = true;

			that.draw = function() {
				that.x -=  (LEVEL_SPEED * 0.1);
				if(clearAfteObject)
					_canvasContext.clearRect(that.x-1, that.y, 1, that.height);


				_canvasContext.fillStyle = 'rgba(0, 0, 0, '+that.alpha+')';
				if(that.antenne == true)
					_canvasContext.fillRect(that.x + (that.width / 2), that.y - 60, 5, 60);
				
				_canvasContext.fillRect(that.x, that.y, that.width, that.height);
			};
			return that;
		};