/** @format */

const keys = document.querySelectorAll(".key");

//plays the audio

function audioPlayer(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

// added key press/down functionality
window.addEventListener("keydown", (event) => {
  const keyValue = event.key.toLowerCase();
  keys.forEach((keyElement) => {
    const dataKey = keyElement.getAttribute("id");
    if (dataKey === keyValue) {
      audioPlayer(dataKey);
    }
  });
});

// added clicking functionality

keys.forEach((keyElement) => {
  keyElement.addEventListener("click", () => {
    const dataKey = keyElement.getAttribute("id");
    audioPlayer(dataKey);
  });
});

// Need to add active effect on keydown, style more, maybe redo the whole thing ???
