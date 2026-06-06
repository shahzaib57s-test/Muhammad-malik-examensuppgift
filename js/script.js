var PressedT = 0;
var PressedF = 0;
var PressedD = 0;
var PressedA = 0;

document.addEventListener("keydown", (event) =>{
    console.log(event)
    document.getElementById(event.code).style.backgroundColor = "var(--color)"

    let audio = document.createElement("audio")
    audio.src = "filer/freesound_community-b6-82017.mp3"

    if(event.code == "KeyF"){
        if(event.code == "KeyF") {
        PressedF += 1;
        if (PressedF >= 3){
            var audio3 = new Audio("filer/[Fang Yuan]“Thes......t for (1).mp3")
            audio3.play();
            PressedF = 0;
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
            PressedT = 0;
        };
    }
  
    if(event.code == "KeyD") {
        PressedD += 1;
        if (PressedD >= 3){
            var audio4 = new Audio("filer/Voicy_The Power Of The Darkside.mp3");
            audio4.play();
            PressedD = 0;
        }
    }

    if(event.code == "KeyA") {
        PressedA += 1;
        if (PressedA >= 3){
            var audio5 = new Audio("filer/bruh-sound-effect_WstdzdM.mp3")
            audio5.play();
            PressedA = 0
        }
    }

});


document.addEventListener("keyup", (event) => {
    console.log(event);
    document.getElementById(event.code).style.backgroundColor = "white"
});