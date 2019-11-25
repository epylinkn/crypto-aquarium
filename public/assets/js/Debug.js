class Debug extends GenericScene {
  draw() {
    background('magenta')

    if (millis() < lastToastAt) {
      displayTitle(toast)
    }
  }

  keyPressed() {
    console.log(`${key} (${keyCode}) is pressed`)
    debounceToast(`${key}`)
  }
}
