const Ball = function (color){
	const r =10
	let c = color
	let x = width/2
	let y = height -(r*2)
	let speedX= 3 * randomDirection()
	let speedY= 5 * randomDirection()

	const reset = function(){
		x= width/2
		y= height -(r*2)

		speedX*= randomDirection()
		speedY*= -1

	}

	const draw = function (){
		ellipseMode(CENTER)
		fill(c)
		noStroke()
		ellipse(x, y, r*2, r*2)
		
	}

	const move = function(){
		x += speedX
		y += speedY
		edges()
	}

	const edges = function(){
		if (y-r <= 0) {
			speedY *= -1
		}

		//rebote area fuera de porteria
		if (x+r >= width || x-r <= 0) {
			speedX *= -1
		}
		
	}

	function randomDirection(){
		return Math.round(Math.random()) *2 -1
	}

	const reStart = function(){
		if ((y - r >=height)) {
			
			reset()
			return 1
		}

		return 0
	}

	/*const checkScore = function(){
		if ((y + r >=height)) {
			alert('GOOOL! P2')
			reset()
			return 1
		}

		return 0
	}*/



	const collision = function(player){
		let dx = Math.abs(x - player.getX() - player.getW() /2)
		let dy = Math.abs(y - player.getY() - player.getH() /2)

		if (dx > player.getW() / 2 + r || dy > player.getH() / 2 + r) {
			return false
		}

		if (dx <= player.getW() / 2 || dy <= player.getH() / 2) {
			speedY *= -1
			return true
		}

	}

	const ironBCollision = function(ironB){
		let dx = Math.abs(x - ironB.getX() - ironB.getW() /2)
		let dy = Math.abs(y - ironB.getY() - ironB.getH() /2)

		if (dx > (ironB.getW() / 2 + r) || dy > ironB.getH() / 2 + r) {
			return false
		}

		if (dx <= (ironB.getW() / 2) || dy <= ironB.getH() / 2) {
			speedY *= -1
			return true
		}

	}


	const brickCollision = function(brick){
		let dx = Math.abs(x - brick.getX() - brick.getW() /2)
		let dy = Math.abs(y - brick.getY() - brick.getH() /2)

		if (dx > brick.getW() / 2 + r || dy > brick.getH() / 2 + r) {
			return false
		}

		if (dx <= brick.getW() / 2 || dy <= brick.getH() / 2) {
			speedY *= -1
			return true
		}

	}

	/*const colorChange = function(){
		fill()
	}*/

	return{
		draw,
		move,
		collision,
		reStart,
		brickCollision,
		ironBCollision,

	}
}