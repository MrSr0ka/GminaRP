// Adds audio from minecraft ButtonClick every time button
// on the website is clicked

// var audio = document.getElementById("buttonAudio");

// function buttonClick() {
//   audio.play();
//   alert("played");
// }

const audio = new Audio();
audio.src = "./audio/buttonClick.mp3";

document.getElementsByClassName("buttonLink", audio.play());
document.getElementsByClassName("menuButtons", audio.play());
document.getElementsByClassName("multiButton", audio.play());
document.getElementsByClassName("sectionButton", audio.play());
