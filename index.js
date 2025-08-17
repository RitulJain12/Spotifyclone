let CurrSong=document.querySelector("#currentSong");
const Songs=[
"Kahani Suno.mp3",
"Daru.mp3",
"Sanson Ki Mala.mp3",
"Chaand Taare Yes Boss 320 Kbps.mp3",
"Somewhere.mp3",
"Tum Ho Toh.mp3"
]

const audioPlayer = document.getElementById("audioPlayer");
const playButtons = document.querySelectorAll(".song-item i");
let prv=null;
let CurrIdx=0;
let Btm=document.querySelector(".btmm");
function playSongAtIndex(index) {
    if (prv) {
        prv.classList.remove("fa-pause");
        prv.classList.add("fa-play");
    }
    audioPlayer.src = Songs[index];
    CurrSong.textContent = Songs[index];
    audioPlayer.play();
    let currBtn = playButtons[index];
    currBtn.classList.add("fa-pause");
    currBtn.classList.remove("fa-play");
    prv = currBtn;
    CurrIdx = index;
}
playButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (audioPlayer.paused || prv !== btn) {
            playSongAtIndex(index);
            Btm.classList.remove("fa-play");
            Btm.classList.add("fa-pause");
        } else {
            audioPlayer.pause();
            btn.classList.remove("fa-pause");
            btn.classList.add("fa-play");
            Btm.classList.remove("fa-pause");
            Btm.classList.add("fa-play");
        }
    });
});


let Bottombtn = document.querySelectorAll(".controls i");
Bottombtn.forEach((btn, indx) => {
    btn.addEventListener("click", () => {
        if (indx == 0) { 
            CurrIdx = (CurrIdx > 0) ? CurrIdx - 1 : 6 - 1;
            playSongAtIndex(CurrIdx);
        }
        else if (indx == 2) { 
            CurrIdx = (CurrIdx + 1) % 6;
            playSongAtIndex(CurrIdx);
        }
        else if (indx == 1) { 
            if (audioPlayer.paused) {
                audioPlayer.play();
                prv.classList.add("fa-pause");
                prv.classList.remove("fa-play");
                btn.classList.remove("fa-play");
                btn.classList.add("fa-pause");
            } else {
                audioPlayer.pause();
                prv.classList.remove("fa-pause");
                prv.classList.add("fa-play");
                btn.classList.remove("fa-pause");
                btn.classList.add("fa-play");

            }
        }
    });
});
let Home=document.querySelector(".hme");
Home.addEventListener("click",()=>{
    alert("Home Pe hi toh ho");
});
let Prog = document.querySelector("#progressBar");

audioPlayer.addEventListener("loadedmetadata", () => {
    Prog.max = audioPlayer.duration;  
});

audioPlayer.addEventListener("timeupdate", () => {
    Prog.value = audioPlayer.currentTime;  
});

Prog.addEventListener("input", (det) => {
    audioPlayer.currentTime = det.target.value; 
});



