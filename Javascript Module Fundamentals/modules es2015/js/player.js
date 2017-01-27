/*
*
* REVEALING MODULE PATTERN - COMMONJS Module
*/


//PRIVATE MEMBERS
var playerName = '';

function logPlayer(){
  console.log("The current player is " + playerName + '.');
}

function setName(newName) {
  playerName = newName;
}

function getName(){
  return playerName;
}

//RETURN PUBLIC API using COMMONJS modules
exports.logPlayer = logPlayer;
exports.setName = setName;
exports.getName = getName;
