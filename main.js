const {app, globalShortcut} = require('electron') // Electron
const exec = require('child_process').exec // Exec
const os = require('os') // OS
const ostype = os.type()
const characters = 'AZERTYUIOPQSDFGHJKLMWXVBN1234567890'

// When application is ready
app.on('ready', () => {
  if(ostype == 'Linux') {
    registerShortcut(characters.split(''), playLinux)
  }
  else if (ostype.substr(0,7) == 'Windows') {
    registerShortcut(characters.split(''), playWindows)
  }
})

// When leaving the application
app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})

// Define global shortcuts for the list of characters
function registerShortcut(characters, callback) {
  for(var i = 0; i < characters.length; i++) {
    globalShortcut.register(characters[i], callback)
  }
}

let playWindows = function() {
  // Execute custom script to play sound in windows
  exec('node play_sound_windows.js dog_bark_x.wav')
}

let playLinux = function() {
  // Execute paplay to play sound in Linux
  exec('paplay dog_bark_x.wav')
}
