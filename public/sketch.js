let socket = io('/')
socket.on('connect', function() {
  console.log('Connected')
})

let counter = 0
let bg
let fish

function preload() {
  roboto = loadFont('assets/fonts/RobotoMono.ttf')

  bg = loadImage('assets/images/bg-aquarium.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight)

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
  background(bg)

  displayTitle(counter)
}
