const edge = require('edge') // Edge
const argv = process.argv // Script arguments

if(typeof argv[2] != "undefined") {
  // Use edge to define C# function to play a sound
  var play = edge.func(function() {/*
      async (input) => {
          var player = new System.Media.SoundPlayer((string)input);
          player.PlaySync();
          return null;
      }
  */})

  // And play it
  play(argv[2])
}
