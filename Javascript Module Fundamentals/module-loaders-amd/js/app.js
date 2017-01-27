//generic iffy

define([
  './player',
  './game'
], function(player, game){

  console.log('Loading modules with Require JS');

// start game handler
  document.getElementById('startGame').addEventListener('click', function(){
    player.setName(document.getElementById('playername').value);
    game.printGame();
  });

// calc answer
  document.getElementById('calculate').addEventListener('click', function(){
    game.calculateScore();
  });

// count problems
  document.getElementById('problemCount').value = game.getProblemCount();

});
