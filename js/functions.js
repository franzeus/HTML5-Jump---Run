/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	Several useful nice awesome functions
*/
var canvas;
var context;

var HEIGHT;
var WIDTH;
		
var hero;
var level;

var moon;
var bg_cloud;
var gradient1;

var spriteSpeed = 100;

var score, counter;

var buffer;
var _canvasContext = null;

var clearAfteObject = false;

const START_SPEED = 7;
const BLOCK_GAP = 150;
const ACCELERATION = 0.001;
var SPEED_EFFECT = 0;
var LEVEL_SPEED;

var platforms = [];
var bonis = [];
var skyscrapers = [];
var clouds = [];
var enemies = [];

var blockWidths = [ 100, 150, 200, 250];
var blockHeights = [ 60, 90, 120, 150];

var buildingWidths = [ 60, 80, 100, 150, 200];
var buildingHeights = [ 120, 150, 180, 210, 250];
var alphaValues = [ 0.2, 0.3 , 0.4, 0.5 , 0.6 , 0.7, 0,8];		

var flash;
var showFlash = false;
var aktiv;

var cloudMoveX = 0;
var skyscraperMoveX = 0;

var fps = 0, now, lastUpdate = (new Date)*1 - 1;
var fpsFilter = 10;

// ------------------------------------------------------
window.requestAnimFrame = (function() { 

	return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback, element) {
				window.setTimeout(callback, 1000/ 60);
			};
})();

// ------------------------------------------------------
function randomNumber( min, max ) {
	if( min > max )
		return( -1 );
	if( min == max )
		return( min );

		return( min + parseInt( Math.random() * ( max-min+1 ) ) );
}

function clear() {
	//_canvasContext.clearRect(0, 10, WIDTH, HEIGHT - 2);
};