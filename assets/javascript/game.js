//    
//    game.js for "Week-4-Game" - RPG Game
//    BootCamp at UNC Homework Assignment 4
//    September 23, 2017
//    Bo Slott
//
//  -------------------------------------------


$(document).ready(function(){

  function gameOn() {

    var game = new RPG();

    //  Set characters
    game.obtainChars();

    game.renderPlayerChooseInit();

    game.blinkEff("char4");

    // Player chooses a character
    $(".chars").on("click", function(event) {
      var charID = event.target.id;

      // This works for up to 10 characters
      game.currentPlayerChar = game.charOpts[charID[4]-1];
      game.whoStillStands(game);
      game.allFall();
      setTimeout(game.endP1, 2900, game);
    });


    $(".enemy-imgs").on("click", function(event) {
      console.log("clickable!");
      var enemyID = event.target.id;

      game.currentEnemy = game.charOpts[enemyID[5]];
      console.log(game.currentEnemy);
    });


  }

  gameOn();
});


