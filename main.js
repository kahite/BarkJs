const {app, globalShortcut} = require('electron')
const exec = require('child_process').exec
const os = require('os')
const ostype = os.type()


app.on('ready', () => {
  if(ostype == 'Linux') {
    globalShortcut.register('A', () => {
      exec('paplay dog_bark_x.wav')
    })
  }
  else if (ostype.substr(0,7) == 'Windows') {
    globalShortcut.register('A', () => {
      exec('node bark.js')
    })
  }
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})
