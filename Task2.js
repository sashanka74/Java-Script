function changecolor() {
    let items = document.getElementsByClassName("highlight");
    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "blue";
        items[i].style.color = "red";
        items[i].style.fontWeight = "bold";
    }
}
