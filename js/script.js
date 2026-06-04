var PressedT = 0;
var PressedF = 0;

document.addEventListener("keydown", (event) =>{
    console.log(event)
    document.getElementById(event.code).style.backgroundColor = "var(--color)"

    let audio = document.createElement("audio")
    audio.src = "filer/freesound_community-b6-82017.mp3"

    if(event.code == "KeyF"){
        if(event.code == "KeyF") {
        PressedF += 1;
        if (PressedF >= 2){
            var audio3 = new Audio("filer/[Fang Yuan]“Thes......t for (1).mp3")
            audio3.play();
        }
    }
    }
    document.body.appendChild(audio)
    audio.play()

    if(event.code == "KeyT") {
        PressedT += 1;
        if (PressedT >= 3){
            var audio2 = new Audio("filer/Voicy_You should choose your words more carefully.mp3");
            audio2.play();
        };
    }else{
        PressedT = 0;
    };

    document.addEventListener("keysdown", (event) => {
        console.log(event)
        document.getElementById("KeyF").style.backgroundColor = "var(--color)"


      
      
    });
});


document.addEventListener("keyup", (event) => {
    console.log(event);
    document.getElementById(event.code).style.backgroundColor = "white"
});