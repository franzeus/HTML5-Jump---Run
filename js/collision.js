/*
	RUNNERSHIGH HTML5 Version
	www.weberdevelopment.de

	*** COLLISION DETECTION COMES HERE ***
*/
// --------------------------------------------------
var isColliding = function(e) {
	if (//(hero.isFalling) && 
		(hero.x < e.x + e.width) && 
		(hero.x + hero.width > e.x) && 
		(hero.y + hero.height > e.y ) &&					
		(hero.y + hero.height < e.y + e.height) //&&
		//(hero.y + hero.height >= e.y)
		) {
			return true;
	} else {
		return false;
	}
};

// --------------------------------------------------
var checkCollision = function(){
	platforms.forEach(function(e, ind){
		if (isColliding(e)) {
			e.onCollide(ind);
		} else {
			e.notOnCollide();
		}
	})

	bonis.forEach(function(e, ind){
		if (			
			(e.x > hero.x) &&
			(e.x + e.width < hero.x + hero.width) &&		
			(hero.y < e.y) && 
			(hero.y + hero.height > e.y )					
			) {
				e.onCollide();
		}
	})

	enemies.forEach(function(e, ind){
		if(e.visible == true) {
			if (			
				(e.x > hero.x) &&
				(e.x + e.width < hero.x + hero.width) &&		
				(e.y > hero.y) && 
				(e.y < hero.y + hero.height)		
				) {
					level.reset();
			}
		}
	})
};