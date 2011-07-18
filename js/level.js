/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	Level class
*/
function Level() {
			
	var that = this;

	that.aktiv;
	
	that.update = function() {	
		if(SPEED_EFFECT > 0)
			SPEED_EFFECT -= 0.5;

		LEVEL_SPEED += ACCELERATION - SPEED_EFFECT;

		that.checkPlatformsPosition();
		that.checkBuildingsPosition();
		that.checkCloudsPosition();
	};

	that.checkPlatformsPosition = function() {		
		for(var i = 0; i < platforms.length; i++) {
			if(platforms[i].x + platforms[i].width + 50 < 0) {						
				platforms[i].x = that.getPreviousBlockXPosition(i);
				
				platforms[i].width = blockWidths[randomNumber(0, blockWidths.length -1)];
				platforms[i].height = blockHeights[randomNumber(0, blockHeights.length - 1)];
				platforms[i].y = HEIGHT - platforms[i].height;
				platforms[i].angle = 0;
				platforms[i].addSpecialFigure();

				// New Bonus Position
				bonis[i].y = platforms[i].y - randomNumber(15,30);
				bonis[i].x = platforms[i].x + randomNumber(0, platforms[i].width);
				if(randomNumber(1,10) > 9)
					bonis[i].visible = true;
				else
					bonis[i].visible = false;

				// New Enemy Position
				var enemyPosY = [ enemies[i].height, platforms[i].height + enemies[i].height];
				enemies[i].y = HEIGHT - enemyPosY[randomNumber(0, 1)];
				enemies[i].x = randomNumber(platforms[i].x, platforms[i].x + platforms[i].width);
				if(randomNumber(1,10) > 4)
					enemies[i].visible = true;
				else
					enemies[i].visible = false;
			}
		}
	};

	that.showGimmick = function() {
		if(randomNumber(0,100) < 2) {
			showFlash = true;
			aktiv = window.setTimeout("hideGimmick()", 1000);
		}
	};

	that.checkCloudsPosition = function() {

		for(var i = 0; i < clouds.length; i++) {
			if(clouds[i].x + 50 < 0) {						
				clouds[i].x = WIDTH + buildingWidths[randomNumber(0, buildingWidths.length - 1)];
				clouds[i].y = buildingWidths[randomNumber(0, buildingWidths.length - 2)];
			}
		}
	};

	that.checkBuildingsPosition = function() {				
		for(var i = 0; i < skyscrapers.length; i++) {
			if(skyscrapers[i].x + skyscrapers[i].width < 0) {						
				skyscrapers[i].x = that.getPreviousBuildingXPosition(i);
				
				skyscrapers[i].width = buildingWidths[randomNumber(0, buildingWidths.length -1)];
				skyscrapers[i].height = buildingHeights[randomNumber(0, buildingHeights.length -1)];
				skyscrapers[i].y = HEIGHT - skyscrapers[i].height;

				if(randomNumber(1,10) > 9)
					skyscrapers[i].antenne = true;
				else
					skyscrapers[i].antenne = false;
			}
		}
	};

	that.getPreviousBlockXPosition = function(index) {
		var newXpos = 0;

		if(index == 0)
			index = platforms.length - 1;
		else
			index = index - 1;

		return platforms[index].x + platforms[index].width + BLOCK_GAP;
	};

	that.getPreviousBuildingXPosition = function(index) {
		var newXpos = 0;
		var gap = 60;

		if(index == 0) {
			index = skyscrapers.length - 1;
			gap = 900;
		} else {
			index = index - 1;					
		}

		return skyscrapers[index].x + skyscrapers[index].width + gap;
	};

	that.generateBlocks = function(nrOfBlocks) {
		var nextX = WIDTH;

		var type;
		for (var i = 0; i < nrOfBlocks; i++) {
			
			if(i > 0)
				nextX = platforms[platforms.length - 1].x + platforms[platforms.length - 1].width + BLOCK_GAP;
			else
				nextX = WIDTH / 2 - 20;

			var rand = blockWidths[randomNumber(0, blockWidths.length -1)];
			var blockWidth = blockWidths[randomNumber(0, blockWidths.length -1)];
			var blockHeight = blockHeights[randomNumber(0, blockHeights.length - 1)];
			platforms[i] = new Platform(nextX, blockWidth, blockHeight);
			bonis[i] = new Bonus(nextX + (blockWidth / 2),  HEIGHT - blockHeight - 15);
			that.generateEnemy(nextX, platforms[i].y, blockWidth, blockHeight);
		}
	};

	that.generateBuildings = function(nr) {
		for (var i = 0; i < nr; i++) {					
			if(i > 0)
				nextX = skyscrapers[skyscrapers.length - 1].x + skyscrapers[skyscrapers.length - 1].width + 60;
			else
				nextX = WIDTH - 100;

			skyscrapers[i] = new Skyscraper(nextX);					
		}
	};

	that.generateClouds = function(nr) {
		for (var i = 0; i < nr; i++) {
			
			if(i > 0)
				nextX = clouds[clouds.length - 1].x + buildingWidths[randomNumber(0, buildingWidths.length - 1)];
			else
				nextX = WIDTH - 200;

			y = buildingWidths[randomNumber(0, buildingWidths.length - 2)];

			clouds[i] = new Cloud(nextX, y);					
		}
	};

	that.generateEnemy = function(_x, _y, _w, _h) {
		enemies.push(new Enemy(_x, _y, _w, _h));
	};

	that.reset = function() {
		LEVEL_SPEED = START_SPEED;
		score.reset();
		platforms = [];
		enemies = [];
		clouds = [];
		skyscrapers = [];

		that.generateBuildings(6);
		that.generateClouds(5);
		that.generateBlocks(5);
	};
};

// ------------------------------------------------------
var showGimmick = function() {
	var rnd = randomNumber(0,100);
	showFlash = false;
	if(rnd < 10) {
		showFlash = true;
	}
	aktiv = setTimeout("showGimmick()", 1000);
};

var startSlowMotion = function() {
			SPEED_EFFECT = 1;
			console.log("slowmotion");
			aktiv = setTimeout("stopSlowMotion()", 1000);	
};

var stopSlowMotion = function() {					
			SPEED_EFFECT = 0;
			clearTimeout(aktiv);
};