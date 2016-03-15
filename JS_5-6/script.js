var hour, min, sec, milisec;

var startButton = document.getElementById('start');
console.log(startButton.innerHTML);
startButton.addEventListener('click', fStart);

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', fClear);

var msec = document.getElementsByClassName('msec');
var mTimer = document.getElementsByClassName('timer');

function timerShow(){
  mTimer.innerHTML = hour + ':' + min + ':' + sec;
  msec.innerHTML = milisec;
}
function counter(){
  milisec++;
  if (milisec = 1000) {
    sec++;
    milisec = 0;
  }
  if (sec = 60) {
    min++;
    sec = 0;
  }
  if (min = 60) {
    hour++;
    min = 0;
  }
  timerShow();
}
function fStart(){
  var timerID = setInterval(counter, 4);
  startButton.innerHTML = 'Pause';
}
function fClear(){
  pause();
  hour = 0;
  min = 0;
  sec = 0;
  milisec = 0;
  startButton.innerHTML = 'Start';
  timerShow();
}
function pause(){
  clearInterval(timerId);
}
