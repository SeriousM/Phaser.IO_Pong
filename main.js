(function () {
  // Initialize Phaser, and creates a 400x490px game
  var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');
  var game_state = {};

  var pad;

  // Creates a new 'main' state that will contain the game
  game_state.main = function () {};
  game_state.main.prototype = {

    preload: function () {
      // Function called first to load all the assets

      this.game.stage.backgroundColor = '#fff2bb';

      game.load.image('pad', 'assets/img/pad.png');
    },

    create: function () {
      // Fuction called after 'preload' to setup the game

      pad = game.add.sprite(50, 400, 'pad');
      pad.anchor.x = 0.5;
      pad.anchor.y = 0.5;
    },

    update: function () {
      // Function called 60 times per second

      // the angle's range is from -3 to +3.
      // therefore we just need to multiply it with 60 to get a 360.
      // we also rotate the pad by 90 deg.
      var angle = game.physics.angleToPointer(pad);
      pad.angle = (angle * 60) + 90;
    },
  };

  // Add and start the 'main' state to start the game
  game.state.add('main', game_state.main);
  game.state.start('main');
})();