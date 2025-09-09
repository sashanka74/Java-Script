let targetDate = new Date("September 11, 2025 12:00:00");

function countdownClock() {
  let now = new Date();
  let timeDiff = targetDate - now;

  if (timeDiff <= 0) {
    document.getElementById("clock").innerText = "SALE STARTED!";
    clearInterval(timer);
    return;
  }

  let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  let timeString =
    days.toString().padStart(2,)+ "d: " +
    hours.toString().padStart(2,) + "h : " +
    minutes.toString().padStart(2,) + "m: " +
    seconds.toString().padStart(2,) + "s";

  document.getElementById("clock").innerText = timeString;
}

let timer = setInterval(countdownClock, 1000);
countdownClock();



