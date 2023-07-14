var button = document.querySelector(".show-cat");
console.log(button);

var cat = document.querySelector(".cat")
console.log(cat);

button.addEventListener("click", function() {
    if(cat.classList.contains("show")) {
        // console.log("Yes");
        cat.classList.remove("show");
    } else {
        // console.log("No");
        cat.classList.add("show");
    }
});