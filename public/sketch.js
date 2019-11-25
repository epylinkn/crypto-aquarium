let socket = io('/')
socket.on('connect', function() {
  console.log('Connected')
})

let counter = 0
let bg
let punkFish
let x, y
let sWidth = 640
let sHeight = 480
let bgDimensions = [1280, 806]

function preload() {
  let params = new URLSearchParams(window.location.search)
  x = params.get('x') || 0
  y = 806 - (params.get('y') || 0)

  roboto = loadFont('assets/fonts/RobotoMono.ttf')

  bg = loadImage('assets/images/bg-aquarium.jpg')

  punkFish = loadAnimation('assets/sprites/punk-fish/idle/a1.png', 'assets/sprites/punk-fish/idle/a8.png');
  debugger
  punkFish.width = 50
  punkFish.height = 50
}

function setup() {
  createCanvas(1024, 768)

  textAlign(CENTER, CENTER)
  textFont(roboto)
  textSize(24)

  colors = {
    primary: color('#C0FFEE'),
    secondary: color('#FFCCC0'),
    background: color('#16161D'),
  }

  socket.on('testCounter', function(payload) {
    counter = payload
  })
}

function draw() {
  image(bg, 0, 0, width, height, x, y - sHeight, 640, 480)
  displayTitle(counter)

  animation(punkFish, 300, 150);
}
