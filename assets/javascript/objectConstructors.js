//
//    Object Constructor Functions
//    "Week-4-Game" - RPG Game
//    Setember 23, 2017
//    Bo Slott
//
//  -----------------------------------


//
//    Character Object Constructor
//
function Character(name, imgSRC, healthPoints, attackPower) {
  this.name = name;
  this.imgSRC = imgSRC;
  this.healthPoints = healthPoints;
  this.attackPower = attackPower;
}


//
//    RPG Object Constructor
//
function RPG() {

  //  "Variables" Properties - start off as blank slates (not undefined)
  this.charOpts = [];
  this.count = 0;
  this.currentPlayerChar = {};
  this.currentEnemy = {};
  this.stillStandingEnemies = [];
  this.defeatedEnemies = [];


  this.obtainChars = function() {
    this.charOpts = dinoChars;
  };
  this.whoStillStands = function(passedObject) {
    var gameObject = passedObject;
    for(var i=0; i<this.charOpts.length; i++) {
      if(this.charOpts[i] === this.currentPlayerChar) {
        this.stillStandingEnemies[i] = "";
      } else {
        this.stillStandingEnemies[i] = this.charOpts[i];
      }
    }
  };
  this.renderPlayerChooseInit = function() {

    $("#chooseChar").fadeIn(1250);
    $(".chars").fadeIn(1250);
  };
  this.resetPlayerChar = function(char) {
    this.currentPlayerChar = char;
  };

  // Player Chooses Character Functions
  this.charBlink = function(charID) {
    var char = $("#" + charID);
    char.fadeOut(80);
    char.fadeIn(80);
  };
  this.blinkEff = function(charID) {
    var char = $("#" + charID);
    setTimeout(this.charBlink, 2000, charID);
    setTimeout(this.charBlink, 4000, charID);
    setTimeout(this.charBlink, 4000, charID);
    setTimeout(this.charBlink, 7000, charID);
    setTimeout(this.charBlink, 9000, charID);
    setTimeout(this.charBlink, 9000, charID);
  };
  this.fallOff = function(i) {
    var char = $("#char"+(i+1));
    char.animate({top: "200px", opacity: 0}, 1000);
  };
  this.allFall = function() {
    setTimeout(function(){this.chooseCharCount = 1;}, 3000);
    for(var i=0; i<this.charOpts.length; i++) {
      if(this.currentPlayerChar != this.charOpts[i]) {
        if(i===0) {
          this.fallOff(i);
        }
        else {
          setTimeout(this.fallOff, 1200, i);
        }
      }
    }
  };
  this.endP1 = function(passedObject) {
    var gameObject = passedObject;
    $(".player-choose-init").hide();
    gameObject.count = 1;
    gameObject.chooseEnemy(gameObject);
  };


// Player Chooses Enemy Functions
  this.renderEnemiesOpts = function (passedObject) {
    var gameObject = passedObject;
    $(".player-choose-enemy").show();
    var enemyOpts = $("#stillStanding");

    for(var i=0; i<gameObject.stillStandingEnemies.length; i++) {
      if(gameObject.stillStandingEnemies[i] !== "") {
        var newImg = $("<img>");
        newImg.attr("src", gameObject.stillStandingEnemies[i].imgSRC);
        newImg.addClass("enemy-imgs");
        newImg.attr("id","enemy" + i);
        enemyOpts.append(newImg);
      }
    }

  };
  
  this.chooseEnemy = function(passedObject) {
    var gameObject = passedObject;
    console.log("chooseEnemy has begun");
    // if(this.count === 1) {
    //   this.count = 2;
    //   console.log("count is now: " + this.count);
    // };
    setTimeout(gameObject.renderEnemiesOpts, 500, gameObject);
  };







  this.setCurrentEnemy = function() {

  };
  this.updateStillStanding = function() {

  };
  this.updateDefeated = function() {

  };
  this.heroMarch = function() {

  };
  this.enemyMarch = function() {

  };
  this.toBattleReady = function() {

  };
  this.charsBattle = function() {

  };
  this.healthCalc = function() {

  };
  this.attackReCalc = function() {

  };
  this.attack = function() {
    this.charsBattle();
    this.healthCalc();
    this.attackReCalc();
  };
  this.charDeath = function() {

  };
  this.toDefeatedArea = function() {

  };
  this.newGame = function() {

  };
  this.resetGame = function() {

  };
  this.fallingBars = function() {

  };

}



