const Brick = function (x, y){
	let pX = x +8
	let pY = y +100
	let w = 90
	let h = 20
	let c1 = random(255)
	let c2 = random(255)
	let c3 = random(255)
	
	const getX = function(){
		return pX
	}

	const getY = function(){
		return pY
	}

	const getW = function(){
		return w
	}
	const getH = function(){
		return h
	}

	const draw = function(){
		fill(c1, c2, c3)
		rect(pX, pY, w, h)
	}

	return{
		draw,
		getX,
		getY,
		getW,
		getH,
	}
}