/*
*
* REVEALING MODULE PATTERN - AMD
*/

//usese relative paths, then define the name of the modules passed in side the anonamous function
define([
  './player',
  './scoreboard'
], function(player, scoreboard){

  var factorElement = document.getElementById('factor');
  var problemsPerGame = 3; //default value

  function printGame(){

    player.logPlayer();

    // determin the number of problems to show
    setProblemCount(document.getElementById('problemCount').value);

    var gameForm = '';

    // Build HTML for current game
    for (var i = 1; i <= problemsPerGame; i++){
      gameForm += '<div class="form-group">';
      gameForm += '<label for="answer' + i +'" class="col-sm-2 control-label">';
      gameForm += factorElement.value + ' x ' + i + ' = </label';
      gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '">';
      gameForm += '</div>';
    }

    //add gameForm to page
    var gameElement = document.getElementById('game');
    gameElement.innerHTML = gameForm;

    //enable the calculateScore button
    document.getElementById('calculate').removeAttribute('disabled');

  }

  function calculateScore() {

    var problemsInGame = getProblemCount();
    var score = 0;

    //loop through the text boxes and calc the number that are correct
    for (var i = 1; i <= problemsInGame; i++){
      var answer = document.getElementById('answer' + i).value;

      if(i * factorElement.value == answer){
        score++;
      }
    }

    var result = {
      name: player.getName(),
      score: score,
      problems: problemsInGame,
      factor: factorElement.value
    }

    var scoreboard = new Scoreboard();

    //calculate and upate score
    scoreboard.addResult(result);
    scoreboard.updateScoreboard();

    //disable the calculateScore button
    document.getElementById('calculate').setAttribute('disabled', 'true');

  }


  function setProblemCount(newProblemCount) {
    problemsPerGame = newProblemCount;
  }

  function getProblemCount() {
    return problemsPerGame;
  }

  return {
    printGame: printGame,
    calculateScore: calculateScore,
    setProblemCount: setProblemCount,
    getProblemCount: getProblemCount
  }

});
