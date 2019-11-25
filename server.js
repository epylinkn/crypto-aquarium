//== Express setup
let port = process.env.PORT || 8000
let express = require('express')
let app = express()
let server = require('http')
  .createServer(app)
  .listen(port, function() {
    console.log('Server listening at port: ', port)
  })

app.use(express.static('public'))
app.use('/scripts', express.static(__dirname + '/node_modules/'))

let aquariumState = {}
let testCounter = 0

let io = require('socket.io').listen(server)

io.on('connection', function(socket) {
  console.log('We have a new client: ' + socket.id)

  testCounter = 0

  setInterval(function() {
    testCounter += 1
    io.emit('testCounter', testCounter)
  }, 1000)

  socket.on('disconnect', function() {
    delete aquariumState[socket.id]
    io.emit('state_updated', aquariumState)
  })
})
