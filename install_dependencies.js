const os = require('os')
const exec = require('child_process').exec
const ostype = os.type()

// Install electron for globalShortcut
exec('npm install electron')
// Browser specific installation
if (ostype.substr(0,7) == 'Windows') {
  // Install edge to play sound in Windows
  exec('npm install edge')
}
