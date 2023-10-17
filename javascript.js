const radio = document.getElementsByName("rating");

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            document.querySelector(".stand").classList.add("hidden");
            document.querySelector(".succ").classList.remove("hidden");
            document.querySelector(".successmes").innerHTML = radio[i].value;
        }
    }
})