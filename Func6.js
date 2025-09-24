// 1)
function finalPrice(price, tax = 5) {
  return price + (price * tax / 100);
}
function calculateFinal() {
  let price = parseFloat(document.getElementById("price").value);
  let taxInput = document.getElementById("tax").value;
  let final = taxInput ? finalPrice(price, parseFloat(taxInput)) : finalPrice(price);

  document.getElementById("result").innerText = "Final Price: " + final.toFixed(2);
}

// 2)
const getTime = function() {
  let now = new Date();
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  return hours + ":" + minutes + ":" + seconds;
};
const updateClock = function() {
  document.getElementById("clock").innerText = getTime();
};
setInterval(updateClock, 1000);
updateClock();

// 3)
(function() {
  let offerEnd = new Date();
  offerEnd.setDate(offerEnd.getDate() + 3);
  const getTimeLeft = function() {
    let now = new Date();
    let diff = offerEnd - now;

    if (diff <= 0) {
      return "Offer Expired!";
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };
  const updateTimer = function() {
    document.getElementById("timer").innerText = getTimeLeft();
  };
  updateTimer();
  setInterval(updateTimer, 1000);
})();

// 4)
let seconds = 0;
let intervalId = null;

function updateDOM(totalSeconds) {
  let mins = Math.floor(totalSeconds / 60);
  let secs = totalSeconds % 60;
  document.getElementById("time").innerText = `${mins}m ${secs}s`;
}
function startTimer() {
  if (intervalId) return;

  intervalId = setInterval(function() {
    seconds++;
    updateDOM(seconds);
  }, 1000);
}
function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

// 5)
function highlightNumbers(start, end, current = start) {
  if (current > end) return;

  let nums = document.querySelectorAll(".number");
  nums.forEach(num => num.classList.remove("highlight"));
  nums[current - start].classList.add("highlight");

  setTimeout(function() {
    highlightNumbers(start, end, current + 1);
  }, 1000);
}
function renderNumbers(start, end) {
  let container = document.getElementById("numbers");
  for (let i = start; i <= end; i++) {
    let span = document.createElement("span");
    span.classList.add("number");
    span.innerText = i;
    container.appendChild(span);
  }
}
let start = 1;
let end = 10;
renderNumbers(start, end);
highlightNumbers(start, end);






