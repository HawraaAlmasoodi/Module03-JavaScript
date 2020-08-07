
// Deel 1

let btn = document.getElementById("mybutton").addEventListener("click", function (e) {
    alert('button clicked');
});

/*
// Deel 3

let changeBtn = document.getElementById("change-btn").addEventListener("click", function (e) {
    let bodyBackgroundColor = document.body;
    bodyBackgroundColor.classList.add("red-background");
});
*/


// Deel 4

let changeBtn = document.getElementById("change-btn").addEventListener("click", function (e) {
    let bodyBackgroundColor = document.body;
    bodyBackgroundColor.classList.toggle("red-background");
});


