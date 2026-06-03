document.addEventListener("keydown", (event) => {
    console.log(event);
    document.getElementById(event.key).style.backgroundColor = "yellow";
})


    document.addEventListener("keyup", (event) => {
        console.log(event);
        document.getElementById(event.key).style.backgroundColor = "white"
})