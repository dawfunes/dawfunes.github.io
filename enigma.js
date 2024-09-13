function toggleText() {
    var h1 = document.getElementById("enigma");
    if (h1.innerHTML === "There may be a page") {
        h1.innerHTML = "There may not";
    } else {
        h1.innerHTML = "There may be a page";
    }
}