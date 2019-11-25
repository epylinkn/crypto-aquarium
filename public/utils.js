let toast
let lastToastAt

function debounceToast(message) {
  lastToastAt = millis() + 2000
  toast = message
}

function displayTitle(title) {
  push()
  rectMode(CORNER)
  fill('white')
  textAlign(CENTER, CENTER)
  textSize(64)
  text(title, 0, 0, windowWidth, windowHeight)
  pop()
}

function displayLeftTitle(title) {
  push()
  rectMode(CORNER)
  fill('white')
  textAlign(CENTER, CENTER)
  textSize(32)
  text(title, 0, 0, width / 2, height)
  pop()
}

function displayRightTitle(title) {
  push()
  rectMode(CORNER)
  fill('white')
  textAlign(CENTER, CENTER)
  textSize(32)
  text(title, width / 2, 0, width / 2, height)
  pop()
}

function displaySplitTitle(title) {
  push()
  rectMode(CORNER)
  fill('white')
  textAlign(CENTER, CENTER)
  textSize(32)
  text(title, 0, 0, width / 2, height)
  text(title, width / 2, 0, width / 2, height)
  pop()
}

function displayTitles(titles) {
  push()

  rectMode(CORNER)
  fill('white')
  textAlign(CENTER, CENTER)

  for (let i = 0; i < titles.length; i++) {
    // (i == 0) ? textSize(64) : textSize(32)
    textSize(32)

    let shift = i - titles.length / 2
    text(titles[i], 0, height / 2 + shift * 100, width, 100)
  }

  pop()
}

function displayLeftTitles(titles) {
  push()

  rectMode(CORNER)
  fill('white')
  textAlign(CENTER, CENTER)

  for (let i = 0; i < titles.length; i++) {
    // (i == 0) ? textSize(64) : textSize(32)
    textSize(32)

    let shift = i - titles.length / 2
    text(titles[i], 0, height / 2 + shift * 100, width / 2, 100)
  }

  pop()
}

function displayRightTitles(titles) {
  push()

  rectMode(CORNER)
  fill('white')
  textAlign(CENTER, CENTER)

  for (let i = 0; i < titles.length; i++) {
    // (i == 0) ? textSize(64) : textSize(32)
    textSize(32)

    let shift = i - titles.length / 2
    text(titles[i], width / 2, height / 2 + shift * 100, width / 2, 100)
  }

  pop()
}
