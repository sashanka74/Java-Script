// program 1

let cartmessage = ""

function order(){
    alert(cartmessage + " you order an item");
}

function addcart() {
    alert(cartmessage + "you added an item to cart");
}

// function createstars (count){
//     let star = "";
//     for (let i = 0; i<count; i++){
//         star += "&#9734";
//     }
//     document.getElementById("star").innerHTML = star
// }
// createstars(5);

// or

// let stars = document.querySelectorAll(".star"); 

// stars.forEach(function(star) {
//   star.addEventListener("click", function() {
//     stars.forEach(s => s.classList.remove("active"));
//     this.classList.add("active");
//   });
// });