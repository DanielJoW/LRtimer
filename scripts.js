var gameTime = 0;
var adTime = 0;
var gameMinuteCount = 0;
var adMinuteCount = 0;
var whichTimer = "";
var stop = false;
var leftStop = false;
var rightStop = false;

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37 && leftStop === false) {
        startTimerLeft();
        whichTimer = "left";
    }
    if(event.keyCode == 39 && rightStop === false) {
        startTimerRight();
        whichTimer = "right";
    }
    if(event.keyCode == 32) {
        stop = true;
        whichTimer = "";
        leftStop = false;
        rightStop = false;
    }
});

function startTimerLeft(){

// Counter1 Logic
  stop = false;
  leftStop = true;
  rightStop = false;
  var myTimer = setInterval(function(){
  if (whichTimer === "right" || stop === true){
    clearInterval(myTimer);
    return;
  }
  gameTime +=1 ;
  if (gameTime <= 59){
  document.getElementById("gTimer").innerHTML = gameTime + "\"";
  }
  if (gameTime % 60 === 0){
  gameMinuteCount = Math.round(gameTime/60);
  }
  if (gameTime >= 60){
    document.getElementById("gTimer").innerHTML = gameMinuteCount + "\'" + (gameTime - (60*gameMinuteCount)) + "\"";
  }
},1000);
}

//

function startTimerRight(){

// Counter2 Logic
  stop = false;
  rightStop = true;
  leftStop = false;
   var myTimer2 = setInterval(function(){
    if (whichTimer === "left" || stop === true){
      clearInterval(myTimer2);
      return;
    }
  adTime +=1 ;
  if (adTime <= 59){
  document.getElementById("aTimer").innerHTML = adTime + "\"";
  }
  if (adTime % 60 === 0){
  adMinuteCount = Math.round(adTime/60);
  }
  if (adTime >= 60){
    document.getElementById("aTimer").innerHTML = adMinuteCount + "\'" + (adTime - (60*adMinuteCount)) + "\"";
  }
},1000);
}
