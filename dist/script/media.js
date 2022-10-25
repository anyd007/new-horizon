const musicContainer = document.querySelector(".audio-container")
const popupBg = document.querySelector(".bg")
const musicItem = document.querySelector(".audio-container__item");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".audio-container__info--progress");
const volume = document.querySelector(".volume")
const volumeContainer = document.querySelector(".audio-container__volume--progress");
const mute = document.querySelector("#mute")
const title = document.querySelector(".audio-container__info--title");
const cover = document.querySelector("#cover");
const playlistContainer = document.querySelector(".audio-playlist");
const playlistItems = document.querySelectorAll(".audio-playlist__item");

//tablica z piosenkami
const songs = Array.from(document.querySelectorAll(".audio-playlist__songs audio"))

//indeks piosenek
let songIndex = songs.length -1;

//domyślna głośność
audio.volume = 0.4
volume.style.width = `${40}%`

//odświeżanie info o piosence
function loadSong(song){
   
    title.textContent = song.textContent
    audio.src = song.src
    // cover.src = `../images/${song}.jpg`
}

const songChoose = e =>{
    playlistItems.forEach((item, itemIndex)=>{
        if(e.target === item){
            songs.forEach((song, index)=>{
                if(index === itemIndex){
                    setTimeout(() => {
                        songIndex = index
                        loadSong(song)
                        musicContainer.classList.add("play")
                        popupBg.classList.add("play")
                        document.body.classList.add("stopScroll")
                        playSong()
                    }, 300);
                }
            })
           
        }
    })
}
const playSong = () =>{
 musicItem.classList.add("play")
 playBtn.querySelector("i.fas").classList.remove("fa-play")
 playBtn.querySelector("i.fas").classList.add("fa-pause")
 audio.play()
}

const pauseSong = () =>{
    musicItem.classList.remove("play")
    playBtn.querySelector("i.fas").classList.add("fa-play")
    playBtn.querySelector("i.fas").classList.remove("fa-pause")
    audio.pause()
}

const playing = () =>{
   const isPaying = musicItem.classList.contains("play");

    if(isPaying){
        pauseSong()
    }
    else{
        playSong()
    }
}

const prevSong = () =>{
 songIndex--

 if(songIndex < 0){
    songIndex = songs.length -1;
 }

 loadSong(songs[songIndex])
 playSong()
}

const nextSong = () =>{
songIndex++

if(songIndex > songs.length -1){
    songIndex = 0;
}
loadSong(songs[songIndex])
 playSong()
}

const updateProgress = (e) => {
 const {duration, currentTime} = e.srcElement;
 const progressPercent = (currentTime / duration) * 100;
 progress.style.width = `${progressPercent}%`
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}

function setVolume(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const volumePrecent = (clickX / width) * 100
    const vol = clickX / width
    audio.volume = vol
    volume.style.width = `${volumePrecent}%`
  mute.classList.remove("fa-volume-xmark")
}

const muteSong = () =>{
    audio.volume = 0;
    volume.style.width = `${0}%`
    mute.classList.add("fa-volume-xmark")

}

playBtn.addEventListener("click", playing)
prevBtn.addEventListener("click", prevSong)
nextBtn.addEventListener("click", nextSong)
mute.addEventListener("click", muteSong)
audio.addEventListener("timeupdate", updateProgress)
audio.addEventListener("ended", nextSong)
progressContainer.addEventListener("click", setProgress)
volumeContainer.addEventListener("click", setVolume)
playlistContainer.addEventListener("click", songChoose)
popupBg.addEventListener("click", ()=>{
    popupBg.classList.remove("play")
    musicContainer.classList.remove("play")
    document.body.classList.remove("stopScroll")
    pauseSong()
})
