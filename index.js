const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  // create the browser window
  win = new BrowserWindow({ width: 600, height: 800})

  win.loadFile('index.html')

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

app.on('ready', createWindow)