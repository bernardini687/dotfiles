Phoenix.set({
  daemon: true,
  openAtLogin: true
})

function golden (length) {
  return Math.round((80 / 100) * length)
}

function goldenFrame (percentage) {
  const { width, height } = Screen.main().frame()

  const goldenWidth = golden(width)
  const goldenHeight = golden(height)

  return {
    x: width / 2 - goldenWidth / 2,
    y: height / 2 - goldenHeight / 2,
    width: goldenWidth,
    height: goldenHeight
  }
}

const goldenWindow = new Key('f', ['control', 'shift'], () => {
  Window.focused().setFrame(goldenFrame())
})
