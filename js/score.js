/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	Score class
*/
var Score = function() {
	var that = this;
	that.score = 0;

	that.addPoints = function (points) {
		that.score += points;
		counter.value = that.score;				
	}

	that.getScore = function() {
		return that.score;
	}
	
	that.reset = function() {
		$("#lastScore").html(that.score);
		that.score = 0;	
		counter.value = 0;			
	}
};


function setCounter() {
	  		score.addPoints(1);	  	  				
}