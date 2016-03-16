var hour = 0, min = 0, sec = 0, milisec = 0;
var timerID;
var splitFlag = false;

var startButton = document.getElementById('start');
startButton.addEventListener('click', fStart);
var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', fClear);

var msec = document.getElementById('msec');
var timer = document.getElementById('timer');


function timerShow(){
  var hour1, min1, sec1, milisec1;
  if (hour < 10) {
    hour1 = '0' + hour;
  } else {
    hour1 = hour;
  }
  if (min < 10) {
    min1 = '0' + min;
  } else {
    min1 = min;
  }
  if (sec < 10) {
    sec1 = '0' + sec;
  } else {
    sec1 = sec;
  }
  if (milisec < 10) {
    milisec1 = '00' + milisec;
  } else {
    if (milisec < 100 && milisec > 9)
      {milisec1 = '0' + milisec;}
     else {
      milisec1 = milisec;
    }
  }
  // a = hour1 + ':' + min1 + ':' + sec1;
  // b = milisec1;
  timer.style.fontsize = parseInt(timer.style.width) / 6 + 'px';
  timer.innerHTML = hour1 + ':' + min1 + ':' + sec1;
  msec.innerHTML = milisec1;
}

function counter(){
  milisec++;
  if (milisec == 1000) {
    sec++;
    milisec = 0;
  }
  if (sec == 60) {
    min++;
    sec = 0;
  }
  if (min == 60) {
    hour++;
    min = 0;
  }
  timerShow();
}
function pause(){
  startButton.innerHTML = 'Start';
  clearInterval(timerID);

}
function fStart(){
  if (startButton.innerHTML == 'Start') {
    startButton.innerHTML = 'Pause';
    timerID = setInterval(counter, 5);
  } else {
    pause();
    startButton.innerHTML = 'Start';
  }
}
function fClear(){
  pause();
  hour = 0;
  min = 0;
  sec = 0;
  milisec = 0;
  startButton.innerHTML = 'Start';
  timerShow();
  if (splitFlag) {
    main.style.margin = 0 + ' auto';
    splitFlag = false;
    splitData.innerHTML = '';
    splitCounter = 0;
  }
}

var splitButton = document.getElementById('split');
splitButton.addEventListener('click', fSplit);
var main = document.getElementById('main');
var splitData = document.getElementById('splitData');
var splitCounter = 0;

function fSplit(){
  if (startButton.innerHTML == 'Pause') {
    var newSplit = document.createElement('p')
    splitFlag = true;
    main.style.margin = 0 + 'px';
    splitCounter++;

    var hour1, min1, sec1, milisec1;
    if (hour < 10) {
      hour1 = '0' + hour;
    } else {
      hour1 = hour;
    }
    if (min < 10) {
      min1 = '0' + min;
    } else {
      min1 = min;
    }
    if (sec < 10) {
      sec1 = '0' + sec;
    } else {
      sec1 = sec;
    }
    if (milisec < 10) {
      milisec1 = '00' + milisec;
    } else {
      if (milisec < 100 && milisec > 9)
        {milisec1 = '0' + milisec;}
       else {
        milisec1 = milisec;
      }
    }

    newSplit.innerHTML = splitCounter + ' Split: ' + hour1 + ':' + min1 + ':' + sec1 +':' + milisec1;
    splitData.appendChild(newSplit);
  }

}
