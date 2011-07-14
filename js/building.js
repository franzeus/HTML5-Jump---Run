function Timer() {
	this.startTime 	= 0;
	this.endTime 	= 0;
	this.startDate  = null;

	this.start = function() {
		this.startDate = new Date();
	  	this.startTime = this.startDate.getTime() / 1000;
	}

	this.elapsed = function() {
	  	var endDate = new Date();
	  	this.endTime = endDate.getTime() / 1000;
	 
	  	return (Math.floor(this.endTime - this.startTime));
	}

	this.stop = function() {
	  	this.startDate = new Date();
	}
}