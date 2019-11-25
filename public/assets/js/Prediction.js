class Prediction extends GenericScene {
  enter() {
    super.enter()

    if (!this.submitted) blockKeypress = true
  }

  setup() {
    this.predictionsForm = select('.predictions-form')
    this.predictionsForm.show()

    this.predictionsSelf = select('#predictions-self')
    this.predictionsFriend = select('#predictions-friend')
    this.predictionsSubmit = select('#predictions-submit')
    this.predictionsSubmit.mousePressed(this.handlePredictionsSubmit.bind(this))
  }

  draw() {
    background(colors.primary)

    if (!this.submitted) return

    displayTitle('Look at conductor')
  }

  handlePredictionsSubmit() {
    socket.emit('player_prediction', {
      self: this.predictionsSelf.value(),
      friend: this.predictionsFriend.value(),
    })

    this.submitted = true
    this.predictionsForm.hide()

    blockKeypress = false
  }
}
