const Paddle = function(player, color){
	const w = 100
	const h = 15
	let x = (width/2) -(w/2)
	let y = height -h -3
	const c= color
	const speed = 24
	let score = 0
	let lifes = 3

	const getX = function(){
		return x
	}

	const getY = function(){
		return y
	}

	const getW = function(){
		return w
	}

	const getH = function(){
		return h
	}

	/*const edge = function(dir){
		return(dir == UP && y >= 0 )||
			(dir == DOWN && y +h <= height)
	}*/

	const edgeX = function(dir){
		return(dir == LEFT && x >= 0 )||
			(dir == RIGHT && x +w <= width)
	}

	const draw = function(){
		
		fill(c)
		stroke('#fff')
		rect(x,y,w,h,20)

	}

	/*const move = function(dir){
		if(edge(dir)){y+=(speed*dir)}
	}*/
	
	const moveX = function(dir){
		if(edgeX(dir)){x+=(speed*dir)}
	}

	const getScore = function(){
		return score
	}

	const setScore = function(x){
		score*=x
	}

	const updateScore = function(){
		score++
	}

	const getLifes = function(){
		return lifes
	}

	const updateLifes = function(){
		lifes--
	}

	return{
		draw,
		//move,
		moveX,
		getX,
		getY,
		getW,
		getH,
		getScore,
		setScore,
		updateScore,
		getLifes,
		updateLifes,
		//edge,
	}
}