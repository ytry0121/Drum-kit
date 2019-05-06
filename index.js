var drums = document.querySelectorAll(".drum");
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  playAudio(buttonInnerHTML);
  addAnimetion(buttonInnerHTML);
}

document.addEventListener("keydown", clickKey);

function clickKey(event) {
  var key = event.key;
  playAudio(key);
  addAnimetion(key);
}

function playAudio(key) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio('sounds/tom-1.mp3');
      break;
    case "a":
      audio = new Audio('sounds/tom-2.mp3');
      break;
    case "s":
      audio = new Audio('sounds/tom-3.mp3');
      break;
    case "d":
      audio = new Audio('sounds/tom-4.mp3');
      break;
    case "j":
      audio = new Audio('sounds/snare.mp3');
      break;
    case "k":
      audio = new Audio('sounds/crash.mp3');
      break;
    case "l":
      audio = new Audio('sounds/kick-bass.mp3');
      break;
    default:
      break;
  }
  audio.play();
}

function addAnimetion(key) {
  var drum = document.querySelector("." + key);
  drum.classList.add("pressed");
  setTimeout(function(){
    drum.classList.remove("pressed");
  }, 100);
}
