const btnStart = document.querySelector(".btnStart");
const inputHour = document.querySelector(".inputHour");
const inputMinute = document.querySelector(".inputMinute");
const inputSecond = document.querySelector(".inputSecond");
const hourSpan = document.querySelector(".span-hour");
const minuteSpan = document.querySelector(".span-minutes");
const secondSpan = document.querySelector(".span-seconds");
const btnStop = document.querySelector(".btnStop");
const btnRestart = document.querySelector(".btnRestart");
const btnContinue = document.querySelector(".btnContinue");
let show = false;

function toggleButtonVisibility(button, show) {
  if (show) {
    button.classList.remove("disappear");
    button.classList.add("show");
  } else {
    button.classList.remove("show");
    button.classList.add("disappear");
  }
}

class Timer {
  constructor() {
    this.hour = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.interval = null;
  }

  formatNumbersToStringWithTwoCharacters(time) {
    return String(time).padStart(2, "0");
  }

  verifyIfIsNumber(value) {
    return isNaN(value);
  }

  cleanInputs() {
    inputHour.value = "";
    inputMinute.value = "";
    inputSecond.value = "";
  }
  countdown(hour, minutes, seconds) {
    this.interval = setInterval(() => {
      if (minutes == 0 && seconds == 0 && hour > 0) {
        hour--;
        minutes = 60;
      }
      if (seconds == 0 && minutes > 0) {
        minutes--;
        seconds = 60;
      }
      seconds--;
      hourSpan.innerHTML = `${this.formatNumbersToStringWithTwoCharacters(
        hour
      )}`;
      minuteSpan.innerHTML = `${this.formatNumbersToStringWithTwoCharacters(
        minutes
      )}`;
      secondSpan.innerHTML = `${this.formatNumbersToStringWithTwoCharacters(
        seconds
      )}`;
      if (hour == 0 && minutes == 0 && seconds == 0) {
        clearInterval(this.interval);
        return alert("fim");
      }
    }, 1000);
  }

  start() {
    this.hour = parseInt(inputHour.value, 10);
    this.minutes = parseInt(inputMinute.value, 10);
    this.seconds = parseInt(inputSecond.value, 10);
    if (this.verifyIfIsNumber(this.hour)) {
      this.hour = 0;
    }
    if (this.verifyIfIsNumber(this.minutes)) {
      this.minutes = 0;
    }
    if (this.verifyIfIsNumber(this.seconds)) {
      this.seconds = 0;
    }
    if (this.hour == 0 && this.minutes == 0 && this.seconds == 0) {
      return alert("insira um tempo");
    }
    this.countdown(this.hour, this.minutes, this.seconds);
    this.cleanInputs();
    toggleButtonVisibility(btnStart, false);
    toggleButtonVisibility(btnRestart, true);
    toggleButtonVisibility(btnStop, true);
  }
  stop() {
    clearInterval(this.interval);
  }
  continue() {
    const hour = parseInt(hourSpan.innerHTML, 10);
    const minutes = parseInt(minuteSpan.innerHTML, 10);
    const seconds = parseInt(secondSpan.innerHTML, 10);
    this.countdown(hour, minutes, seconds);
  }
  restart() {
    clearInterval(this.interval);
    this.hour = 0;
    this.minutes = 0;
    this.seconds = 0;
    hourSpan.innerHTML = `${this.formatNumbersToStringWithTwoCharacters(
      this.hour
    )}`;
    minuteSpan.innerHTML = `${this.formatNumbersToStringWithTwoCharacters(
      this.minutes
    )}`;
    secondSpan.innerHTML = `${this.formatNumbersToStringWithTwoCharacters(
      this.seconds
    )}`;
  }
}

const timer = new Timer();

btnStart.addEventListener("click", () => {
  timer.start();
});

btnStop.addEventListener("click", () => {
  timer.stop();
  toggleButtonVisibility(btnContinue, true);
});

btnRestart.addEventListener("click", () => {
  timer.restart();
  toggleButtonVisibility(btnStart, true);
  toggleButtonVisibility(btnRestart, false);
  toggleButtonVisibility(btnStop, false);
  toggleButtonVisibility(btnContinue, false);
});

btnContinue.addEventListener("click", () => {
  timer.continue();
});
