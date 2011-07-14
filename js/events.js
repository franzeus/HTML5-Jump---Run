/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	*** DRAW THE GAME ***
*/
function onKeyDown(evt) {
	console.log(evt.keyCode);	
	switch (evt.keyCode) {
		// Arrow Up -> Jump
		case 38:
				hero.jump();
				break;
		case 32:
				hero.jump();
				break;
		case 88:
			startSlowMotion();
			break;
	}
};

function onKeyUp(evt) {
	switch (evt.keyCode) {				
	}
};