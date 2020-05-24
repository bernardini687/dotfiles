Phoenix.set({
  daemon: true,
  openAtLogin: true,
});

function percent(length, amount) {
  return Math.round((amount / 100) * length);
}

function centerFrame(percentage) {
  const { width: screenW, height: screenH } = Screen.main().frame();
  const width = percent(screenW, percentage);
  const height = percent(screenH, percentage);

  return {
    x: screenW / 2 - width / 2,
    y: screenH / 2 - height / 2,
    width,
    height,
  };
}

// type Position = 'left' | 'right'
function halfFrame(position) {
  const { width: screenW, height } = Screen.main().frame();
  const width = screenW / 2;
  const x = position === 'left' ? 0 : width;

  return {
    x,
    y: 0,
    width,
    height,
  };
}

/* * * HANDLERS * * */
const leftWindow = new Key('q', ['control', 'shift'], () => {
  Window.focused().setFrame(halfFrame('left'));
});
const rightWindow = new Key('w', ['control', 'shift'], () => {
  Window.focused().setFrame(halfFrame('right'));
});

const smallWindow = new Key('a', ['control', 'shift'], () => {
  Window.focused().setFrame(centerFrame(40));
});
const mediumWindow = new Key('s', ['control', 'shift'], () => {
  Window.focused().setFrame(centerFrame(76));
});
const maxWindow = new Key('d', ['control', 'shift'], () => {
  Window.focused().setFrame(centerFrame(100));
});
