// for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("Hey! I got clicked.");
//   });
// }

function PlaySound(keyletter) {
  this.keyletter = keyletter.toLowerCase(); 

  this.playSound = function () {
    const soundseq = {
      c: "sounds/crash.mp3",
      t: "sounds/kick-bass.mp3",
      s: "sounds/snare.mp3",
      d: "sounds/tom-1.mp3",
      j: "sounds/tom-2.mp3",
      k: "sounds/tom-3.mp3",
      l: "sounds/tom-4.mp3",
    };

    const sound = soundseq[this.keyletter];
    if (sound) {
      new Audio(sound).play();
    } else {
      console.log("No sound mapped for:", this.keyletter);
    }
  };
}

// Mouse click
for (let drum of document.querySelectorAll(".drum")) {
  drum.addEventListener("click", function () {
    const keyPressed = this.innerHTML.trim().toLowerCase(); 
    const drumSound = new PlaySound(keyPressed);
    drumSound.playSound();
    buttonAnimation(keyPressed);
  });
}

// Keyboard press
document.addEventListener("keydown", function (event) {
  const drumSound = new PlaySound(event.key);
  drumSound.playSound();
  buttonAnimation(event.key);
});

// Animation
function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
