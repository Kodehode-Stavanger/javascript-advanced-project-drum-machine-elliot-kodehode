/** @format */

const keys = document.querySelectorAll(".key-container");

//plays the audio

function audioPlayer(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}
// adding key press/down functionality

window.addEventListener("keydown", (event) => {
  const keyValue = event.key.toLowerCase();
  keys.forEach((keyElement) => {
    const dataKey = keyElement.getAttribute("id");
    if (dataKey === keyValue) {
      audioPlayer(dataKey);
    }
  });
});

// adds clicking functionality

keys.forEach((keyElement) => {
  keyElement.addEventListener("click", () => {
    const dataKey = keyElement.getAttribute("id");
    audioPlayer(dataKey);
  });
});
