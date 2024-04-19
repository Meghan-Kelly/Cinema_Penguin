/*
   New Perspectives on HTML and CSS, 7th Edition
   Tutorial 8
   Tutorial Case


   Filename: cp_spin.js

   Purpose: The purpose of this program is to synchronize
            the play and pause of the spin animation with the 
            play and pause of the video player
*/

window.onload = function() {
    document.getElementById("rotateVideo").addEventListener("click", pausePlayAnimVid);
    var video = document.getElementsByTagName("video")[0];
    video.addEventListener("play", startAnimationOnPlay);
};

function pausePlayAnimVid() {
    var video = document.getElementsByTagName("video")[0];
    if (document.getElementById("rotateVideo").checked) {
        video.play();
        video.loop = true;
    } else {
        video.pause();
        video.loop = false;
    }
}

function startAnimationOnPlay() {
    document.getElementById("rotateVideo").checked = true;
}