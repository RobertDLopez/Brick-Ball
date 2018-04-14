const IronB = function (){
	let pX = 500
	let pY = 300
	let w = 400
	let h = 20


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
		fill('rgb(226, 217, 217)')
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