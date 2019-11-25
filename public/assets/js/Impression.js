class Impression extends GenericScene {
  enter() {
    super.enter()

    if (!this.submitted) blockKeypress = true
  }

  setup() {
    this.impressionsForm = select('.impressions-form')
    this.impressionsForm.show()

    this.impressionsLeader = select('#impressions-leader')
    this.impressionsAwkward = select('#impressions-awkward')
    this.impressionsSubmit = select('#impressions-submit')
    this.impressionsSubmit.mousePressed(this.handleImpressionsSubmit.bind(this))
  }

  draw() {
    background(colors.primary)

    if (!this.submitted) return

    displayTitle('Look at conductor')
  }

  handleImpressionsSubmit() {
    socket.emit('player_impression', {
      leader: this.impressionsLeader.value(),
      awkward: this.impressionsAwkward.value(),
    })

    this.submitted = true
    this.impressionsForm.hide()

    blockKeypress = false
  }
}
