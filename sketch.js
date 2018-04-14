const LEFT = -1
const RIGHT = 1
let brick = []
let ball
let p1
let band = true
let r = 0
let bHit
let pHit
let fall
let cont = 0
let lvl = 1
let ironB

function preload() {
  stg = loadImage('libraries/assets/fondo.jpg')
  bHit = loadSound('libraries/assets/beep.ogg')
  pHit = loadSound('libraries/assets/plop.ogg')
  fall = loadSound('libraries/assets/peep.ogg')
}

function setup (){
	createCanvas(windowWidth, windowHeight);
	//Instancia de la pelota
	ball = new Ball('white')
	//Instancia de las paddles
	p1 = new Paddle(1, 'blue')
	//Instanca de los ladrillos grises
	ironB = new IronB()
	//Instancia del arreglo de ladrillos
	for (var j = 1; j < 2; j++) {
		for (var i = 0; i < 15; i++) {
			brick.push(new Brick(i*90, j*20))
		}
	}
	

}

function draw (){
	//Fondo
	image(stg,0,0,width,height)
	//Bordes laterales y superior
	drawStage()
	//Pinta los ladrillos
	drawBricks()
	
	//Niveles del juego
	if (lvl > 1) {
		
		ironB.draw()
	//pinta y/o define la colision entre pelota/ladrillo-gris
		if (ball.ironBCollision(ironB)) {
			ball.move()
			ball.draw()
			pHit.play()
		}
	}


	//Pinta la pelota
	ball.draw()
	//Pinta el movimiento de la pelota
	ball.move()
	//pinta y/o define la colision entre pelota/paddle
	if (ball.collision(p1)) {
		ball.move()
		ball.draw()
		pHit.play()
	}
	
	//pinta y/o define la colision entre pelota/ladrillo
	for (let i = 0; i < brick.length; i++) {
		if (ball.brickCollision(brick[i])) {
			ball.move()
			ball.draw()
			brick.splice(i,1)
			p1.updateScore()
			bHit.play()
			cont++
		}
	}
	//Reinicia la posicion de la pelota
	let reStart = ball.reStart()
	if (reStart === 1) {
		p1.updateLifes()
		fall.play()
	}

	//Lanza mensaje de fin del juego cuando acaban las vidas
	if (p1.getLifes() < 0) {
		alert('GAME OVER')
	}
	//Pinta paddle
	p1.draw()

	//Movimientos del paddle
	if (keyIsPressed) {
		//Move player 1
		if (keyIsDown(LEFT_ARROW)) {p1.moveX(LEFT)}
		if (keyIsDown(RIGHT_ARROW)) {p1.moveX(RIGHT)}


	}
	//Funcion para mostrar vidas, puntos, nivel, y bloques actuales
	showScore()
	//Condicion para pasar de nivel
	if (p1.getScore()==15) {
		lvl++
		setup()
		p1.setScore(0)
	}
}



const drawStage = function(){
	stroke('#fff')
	strokeWeight(7)
	//top
	line(0,0,width,0)
	
	//right
	line(width,0,width,height)
	//left
	line(0,0,0,height)
	noFill()

	
}

const drawBricks = function(){
	for (let i = 0; i < brick.length; i++) {
		strokeWeight(2)
		brick[i].draw()
	}
	
	
}

const showScore = function(){
	fill('#fff')
	textSize(50)
	text('Score= '+p1.getScore(), width * 0.25, 70)
	text('Lifes= '+p1.getLifes(), width * 0.58, 70)
	text('Left: '+brick.length, width * 0.10, 70)
	text('Level= '+lvl, width * 0.75, 70)



}


