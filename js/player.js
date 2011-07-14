/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	Player class
*/
function Player() {

	var that = this;

	this.width = 25;			
	this.height = 31;

	this.x = 0;
	this.y = 0;

	this.img = new Image();
	this.img.src = "images/lineman.png";

	that.grounded = true;

	// *** JUMP *** //
	// new attributes
	that.isJumping = false;
	that.isFalling = false;
	// state of the object described by bool variables - is it rising or falling?  
	  
	that.jumpSpeed = 0;
	that.fallSpeed = 0;
	// each - jumping & falling should have its speed values

	// *** PLAYER SPRITE *** //
	//number of frames indexed from zero  
	that.frames = 5;  
	//start from which frame
	that.actualFrame = 0;			
	that.interval = 0;

	// Set Position
	that.setPosition = function(x, y){  
	    that.x = x;  
		that.y = y;
	}  

	// ------------------------------------------------------
	this.draw = function() {
		if(clearAfteObject)
			_canvasContext.clearRect(that.x-1, that.y, 1, that.height);

			if(that.y > HEIGHT - that.height)
				that.y = HEIGHT - that.height - 2;

		// PlayerSprite
		if (that.interval == 4 ) {  
			if (that.actualFrame == that.frames) {  
	    		that.actualFrame = 0;  
			} else {  
	    		that.actualFrame++;  
			}  
			that.interval = 0;  
		}  
		that.interval++;
			
		try {
			_canvasContext.drawImage(this.img, that.width * that.actualFrame ,0 ,that.width, that.height, this.x, this.y, that.width, that.height);
		} catch(e) {};
	}

	 // ------------------------------------------------------
	that.jump = function() {  
		//initiation of the jump  
		if (!that.isJumping && !that.isFalling) {  
			//if objects isn't currently jumping or falling (preventing of 'double jumps', or bouncing from the air  
			that.fallSpeed = 0;
			that.isJumping = true;
			that.jumpSpeed = 18;  
			that.grounded = false;
			// initial velocity  
		}
	}

	// ------------------------------------------------------
	that.checkJump = function() {  
		//when 'jumping' action was initiated by jump() method, initiative is taken by this one.  
		that.setPosition(that.x, that.y - that.jumpSpeed);  
		//move object by number of pixels equal to current value of 'jumpSpeed'  
		that.jumpSpeed--;  
		//and decease it (simulation of gravity)  
		if (that.jumpSpeed == 0) {  
			//start to falling, similar to jump() function  
			that.isJumping = false;  
			that.isFalling = true;  
			that.fallSpeed = 1;  
		}  
		  
	}  

	// ------------------------------------------------------
	that.checkFall = function(){  
		//same situation as in checkJump()  
		if (that.y < HEIGHT - that.height) {  
			//check if the object meets the bottom of the screen, if not just change the position and increase fallSpeed (simulation of gravity acceleration)...  
			that.setPosition(that.x, that.y + that.fallSpeed);  
			that.fallSpeed++;
		} else {
			that.fallStop();  
		}
		that.isFalling = false;
	}  

	// ------------------------------------------------------
	that.fallStop = function(){  
		//stop falling
		that.isFalling = false;
		that.fallSpeed = 0;
		hero.grounded = true;					
	}  
};