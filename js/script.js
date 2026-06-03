document.addEventListener("keydown", (event) => {
    console.log(event);
    document.getElementById(event.code).style.backgroundColor = "gold";
})


    document.addEventListener("keyup", (event) => {
        console.log(event);
        document.getElementById(event.code).style.backgroundColor = "white"
})