var gameTime = 0;
var adTime = 0;
var gameMinuteCount = 0;
var adMinuteCount = 0;
var whichTimer = 0;

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        startTimerLeft();
        whichTimer += 1;
    }
    else if(event.keyCode == 39) {
        startTimerRight();
        whichTimer -= 1;
    }
});

function startTimerLeft(){

// Counter1 Logic

  var myTimer = setInterval(function(){
  if (whichTimer === 0){
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

function startTimerRight(){

// Counter2 Logic

var myTimer2 = setInterval(function(){
    if (whichTimer === 1){
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
