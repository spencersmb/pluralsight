/*
*
* REVEALING MODULE PATTERN - AMD Module
*/


define([
  //no dependencies
], function(){

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

  //RETURN PUBLIC API
  return {
    logPlayer: logPlayer,
    setName: setName,
    getName: getName
  }
});
