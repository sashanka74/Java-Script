function createstars(count) {
  let star = "Rating";
  for (let i = 0; i < count; i++) {
    star += "&#9734;"; 
  }
  document.getElementById("star").innerHTML = star;
}

createstars(5); 
