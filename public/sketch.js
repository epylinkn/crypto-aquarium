let socket = io('/')
socket.on('connect', function() {
  console.log('Connected')
})

let counter = 0
let bg
let fish
let x, y
let screenWidth = 640
let screenHeight = 480
let bgDimensions = [1280, 806]

let tankWidth = 1280
let tankHeight = 806

function preload() {
  let params = new URLSearchParams(window.location.search)
  x = params.get('x') || 0
  y = 806 - (params.get('y') || 0)

  roboto = loadFont('assets/fonts/RobotoMono.ttf')

  bg = loadImage('assets/images/bg-aquarium.jpg')

  fish = createSprite(0, 0)

  fish.addAnimation('idle', 'assets/sprites/punk-fish/idle/a1.png', 'assets/sprites/punk-fish/idle/a8.png');
  fish.scale = 0.25
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

  socket.on('fishUpdated', function(payload) {
    fish.position.x = payload.x
    fish.position.y = payload.y
    fish.velocity.x = payload.vx
    fish.velocity.y = payload.vy
  })
}

function draw() {
  image(bg, 0, 0, width, height, x, y - screenHeight, 640, 480)

  if (fish.position.y >= height - 20) {
    fish.velocity.y = -1
  }

  if (fish.position.y <= 0 + 20) {
    fish.velocity.y = 1
  }

  if (fish.position.x >= width - 50) {
    fish.velocity.x = -1
    fish.mirrorX(-1)
  }

  if (fish.position.x <= 0 + 50) {
    fish.velocity.x = 1
    fish.mirrorX(1)
  }

  drawSprites()
}
