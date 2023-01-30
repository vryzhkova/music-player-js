const audio = new Audio();
const player = document.querySelector(".player");
const trackCard = document.getElementsByClassName("track");
const pauseBtn = document.querySelector(".player_controller_pause");
const stopBtn = document.querySelector(".player_controller_stop");

const playMusic = (event) => {
  const trackActive = event.currentTarget;

  audio.src = trackActive.dataset.track;
  audio.play();
  pauseBtn.classList.add("player__icon_play");
  player.classList.add("player_active");

  for (let i = 0; i < trackCard.length; i++) {
    trackCard[i].classList.remove("track__active");
  }

  trackActive.classList.add("track_active");
};

for (let i = 0; i < trackCard.length; i++) {
  trackCard[i].addEventListener("click", playMusic);
}

pauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    pauseBtn.classList.remove("player__icon_play");
  } else {
    audio.pause();
    pauseBtn.classList.add("player__icon_play");
  }
});

stopBtn.addEventListener("click", () => {});
