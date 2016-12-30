/*
*
* REVEALING MODULE PATTERN - CONSTRUCTOR EXAMPLE
*/

var Scoreboard = function(){ //Start with an Uppercase - like a class

  console.log('Scoreboard created.');
  var results = [];

  function addResult(newResult){
    results.push(newResult);
  }

  function updateScoreboard(){

    var output = '<h2>Scoreboard</h2>';

    // for each array of results, a single result object is added as an array item
    for( var index = 0; index < results.length; index++){
      var result = results[index];
      output += '<h4>';
      output += result.name + ': ' + result.score + '/' + result.problems; + ' for factor ' + result.factor;
      output += '</h4>';
    }

    var scoresElement = document.getElementById('scores');
    scoresElement.innerHTML = output;

  }
  //EXPOSE functions as public API
  return {
    addResult: addResult,
    updateScoreboard: updateScoreboard
  }

}; //Do not immediatly invoke this function so dont add parenthisis;
