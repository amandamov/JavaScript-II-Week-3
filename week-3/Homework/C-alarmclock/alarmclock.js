function setAlarm() {
  let time = document.querySelector("#alarmSet").value;
  let timeRemaining = document.querySelector("#timeRemaining");
  // timeRemaining.textContent = `Time Remaining: 00: ${time}`;
  
  const intervalId = setInterval(() => {
    time = time - 1;
    if (time >= 10){
      timeRemaining.textContent = `Time Remaining: 00: ${time}`;
    } else if (time === 0)  {
      clearInterval(intervalId)
      playAlarm()
    } else {
      timeRemaining.textContent = `Time Remaining: 00:0${time}`;
    }
    console.log(time)
  }, 1000)
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
