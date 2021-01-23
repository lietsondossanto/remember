const { app, BrowserWindow } = require('electron')
// Global reference to the window object
let win
// This method will be called when Electron has finished
// initialization and is ready to create browser windows
app.on('ready', function(){
// Create the window
win = new BrowserWindow({width: 800, height: 600})
// Open and load index.html to the window
win.loadURL('file://' + __dirname + '/index.html')
// Emitted when the window is closed.
win.on('closed', () => {
// Dereference the window object
win = null
});
})
// Quit the app if all windows are closed
app.on('window-all-closed', () => {
app.quit()
})