const playButton = document.getElementById("playButton");
const audioPlayer = document.getElementById("audioPlayer");
const front = playButton.querySelector(".front");
const defaultLabel = front.textContent;

let labelResetTimer;

function playNoooooo() {
  audioPlayer.currentTime = 0;
  const playPromise = audioPlayer.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay / play() can reject if the file isn't ready yet; ignore.
    });
  }

  front.textContent = "NOOOOOO";

  clearTimeout(labelResetTimer);
  labelResetTimer = setTimeout(() => {
    front.textContent = defaultLabel;
  }, 500);
}

playButton.addEventListener("click", playNoooooo);
