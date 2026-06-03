document.addEventListener("keydown", (event) => {
    console.log(event)
    document.getElementById(event.code).style.backgroundColor = "var(--color)"

    let audio = document.createElement("audio")
    audio.src = "filer/freesound_community-b6-82017.mp3"
    document.body.appendChild(audio)
    audio.play()
})


document.addEventListener("keyup", (event) => {
    console.log(event);
    document.getElementById(event.code).style.backgroundColor = "white"
})