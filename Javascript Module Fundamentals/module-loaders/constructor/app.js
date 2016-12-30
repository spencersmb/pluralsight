//generic iffy
(function(){

  console.log('Init App.js');

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


})();
