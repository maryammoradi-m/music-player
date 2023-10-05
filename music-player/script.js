let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value=song.currentTime;
}
 function playPause(){
   if(ctrlIcon.classList.contains("ion-ios-pause")) {
    song.pause();
    ctrlIcon.classList.remove("ion-ios-pause");
    ctrlIcon.classList.add("ion-play");
   }
   else{
    song.play();
    ctrlIcon.classList.add("ion-ios-pause");
    ctrlIcon.classList.remove("ion-play");
   }
 }
 if (song.play()){
    setInterval(()=>{
        progress.value= song.currentTime;
    },500)
 }
 progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    ctrlIcon.classList.add("ion-ios-pause");
    ctrlIcon.classList.remove("ion-play");
 }
