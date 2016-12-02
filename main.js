const {app, globalShortcut} = require('electron')
const exec = require('child_process').exec


app.on('ready', () => {
  globalShortcut.register('A', () => {
    exec('node bark.js')
  })
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})
