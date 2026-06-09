var PressedT = 0;
var PressedF = 0;
var PressedD = 0;
var PressedA = 0;
var PressedQ = 0;
var PressedE = 0;
var PressedS = 0;
var PressedR = 0;
var PressedG = 0;

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

    if(event.code == "KeyQ") {
        PressedQ += 1;
        if (PressedQ >= 3) {
            var video = document.getElementById("fang yuan qoute")
            video.hidden = false;
            video.play();
            PressedQ = 0

        var video = document.getElementById("fang yuan qoute");
        video.addEventListener("ended", () => {
            video.hidden = true;
        });
    }
}
    if(event.code == "KeyE") {
        PressedE += 1;
        if (PressedE >= 3) {
            var video = document.getElementById("fangYuan2");
            video.hidden = false;
            video.play();
            PressedE = 0

            var video = document.getElementById("fangYuan2");
            video.addEventListener("ended", () => {
                video.hidden = true;
            })
        }
    }
    if(event.code == "KeyS") {
        PressedS += 1;
        if (PressedS >= 3) {
            var video = document.getElementById("fate")
            video.hidden = false;
            video.play();
            PressedS = 0

            var video = document.getElementById("fate");
            video.addEventListener("ended", () => {
                video.hidden = true;
            })
        }
    }
    if(event.code == "KeyR") {
        PressedR += 1;
        if (PressedR >= 3) {
            var video = document.getElementById("qoute4")
            video.hidden = false;
            video.play();
            PressedS = 0

            var video = document.getElementById("qoute4");
            video.addEventListener("ended", () => {
                video.hidden = true;
            })
        }
    }
    if(event.code == "KeyG") {
        PressedG += 1;
        if (PressedG >= 3) {
            var video = document.getElementById("Race")
            video.hidden = false;
            video.play();
            PressedS = 0

            var video = document.getElementById("Race");
            video.addEventListener("ended", () => {
                video.hidden = true;
            })
        }
    }
    if (event.code =="KeyB") {
            document.body.style.backgroundImage = "url('filer/gif web.gif')";
        }
    if (event.code =="KeyN") {
            document.body.style.backgroundImage = "url('filer/wave.gif')";
        }
    if (event.code =="KeyM") {
            document.body.style.backgroundImage = "url('filer/water.gif')";
        }   
    if (event.code =="KeyL") {
            document.body.style.backgroundImage = "url('filer/light.gif')";
        }
        if (event.code =="KeyK") {
            document.body.style.backgroundImage = "url('filer/light.gif')";
        }
        if (event.code =="KeyK") {
            document.body.style.backgroundImage = "url('filer/dark.gif')";
        }
});

document.addEventListener("keyup", (event) => {
    console.log(event);
    document.getElementById(event.code).style.backgroundColor = "white"
});

document.addEventListener("keydown", (event) => {
    const input = document.getElementById("textWrite")

    if (event.key.length == 1) {
        input.value += event.key;
    }
});