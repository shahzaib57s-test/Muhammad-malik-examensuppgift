document.addEventListener("keydown", (event) => {
    console.log(event)
    document.getElementById(event.code).style.backgroundColor = "var(--color)"

    let audio = document.createElement("audio")
    audio.src = "filer/freesound_community-b6-82017.mp3"
    document.body.appendChild(audio)
    audio.play()

    
    let audio1 = document.createElement("audio")
    audio.src = "filer/[Fang Yuan]“Thes......t for (1).mp3"
    document.body.appendChild(audio)
    audio.play()

    document.addEventListener("keydown", (event) => {
        console.log(event)
        document.getElementById("KeyS").style.backgroundColor = "var(--color)"

      
    })
})


document.addEventListener("keyup", (event) => {
    console.log(event);
    document.getElementById(event.code).style.backgroundColor = "white"
})