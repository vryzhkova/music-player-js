const dataMusic = [
  {
    id: "1",
    artist: "The weeknd",
    track: "Save your tears",
    poster: "img/song1.jpg",
    mp3: "audio/The Weeknd - Save Your Tears.mp3",
  },
  {
    id: "2",
    artist: "Imagine Dragons",
    track: "Follow You",
    poster: "img/song2.jpg",
    mp3: "audio/Imagine Dragons - Follow You.mp3",
  },
  {
    id: "3",
    artist: "Tove Lo",
    track: "How Long",
    poster: "img/song3.jpg",
    mp3: "audio/Tove Lo - How Long.mp3",
  },
  {
    id: "4",
    artist: "Tom Odell",
    track: "Another Love",
    poster: "img/song4.jpg",
    mp3: "audio/Tom Odell - Another Love.mp3",
  },
  {
    id: "5",
    artist: "Lana Del Rey",
    track: "Born To Die",
    poster: "img/song5.jpg",
    mp3: "audio/Lana Del Rey - Born To Die.mp3",
  },
  {
    id: "6",
    artist: "Adele",
    track: "Hello",
    poster: "img/song6.jpg",
    mp3: "audio/Adele - Hello.mp3",
  },
  {
    id: "7",
    artist: "Tom Odell",
    track: "Can't Pretend",
    poster: "img/song7.jpg",
    mp3: "audio/Tom Odell - Can't Pretend.mp3",
  },
  {
    id: "8",
    artist: "Lana Del Rey",
    track: "Young And Beautiful",
    poster: "img/song8.jpg",
    mp3: "audio/Lana Del Rey - Young And Beautiful.mp3",
  },
  {
    id: "9",
    artist: "Adele",
    track: "Someone Like You",
    poster: "img/song9.jpg",
    mp3: "audio/Adele - Someone Like You.mp3",
  },
  {
    id: "10",
    artist: "Imagine Dragons",
    track: "Natural",
    poster: "img/song10.jpg",
    mp3: "audio/Imagine Dragons - Natural.mp3",
  },
  {
    id: "11",
    artist: "Drake",
    track: "Laugh Now Cry Later",
    poster: "img/song11.jpg",
    mp3: "audio/Drake - Laugh Now Cry Later.mp3",
  },
  {
    id: "12",
    artist: "Madonna",
    track: "Frozen",
    poster: "img/song12.jpg",
    mp3: "audio/Madonna - Frozen.mp3",
  },
];

const audio = new Audio();
const player = document.querySelector(".player");
const trackCard = document.getElementsByClassName("track");
const pauseBtn = document.querySelector(".player_controller_pause");
const stopBtn = document.querySelector(".player_controller_stop");
const catalogContainer = document.querySelector(".catalog__container");

const pausePlayer = () => {
  const trackActive = document.querySelector(".track_active");

  if (audio.paused) {
    audio.play();
    pauseBtn.classList.remove("player__icon_play");
    trackActive.classList.remove("track_pause");
  } else {
    audio.pause();
    pauseBtn.classList.add("player__icon_play");
    trackActive.classList.add("track_pause");
  }
};

const playMusic = (event) => {
  event.preventDefault();
  const trackActive = event.currentTarget;

  if (trackActive.classList.contains("track_active")) {
    pausePlayer();
    return;
  }

  const id = trackActive.dataset.idTrack;
  const track = dataMusic.find((item) => id === item.id);
  audio.src = track.mp3;

  audio.play();
  pauseBtn.classList.remove("player__icon_play");
  player.classList.add("player_active");

  for (let i = 0; i < trackCard.length; i++) {
    trackCard[i].classList.remove("track__active");
  }

  trackActive.classList.add("track_active");
};

const addHandlerTrack = () => {
  for (let i = 0; i < trackCard.length; i++) {
    trackCard[i].addEventListener("click", playMusic);
  }
};

pauseBtn.addEventListener("click", pausePlayer);

// stopBtn.addEventListener("click", () => {});

const createCard = (data) => {
  const card = document.createElement("a");
  card.href = "#";
  card.classList.add("catalog__item", "track");
  card.dataset.idTrack = data.id;

  card.innerHTML = `
  <div class="track__img-wrap">
    <img
      class="track__poster"
      src="${data.poster}"
      alt="${data.artist} ${data.track}"
      width="180"
      height="180"
    />
  </div>
  <div class="track__info track-info">
    <p class="track__title">${data.track}</p>
    <p class="track__artist">${data.artist}</p>
  </div>
  `;

  return card;
};

const renderCatalog = (dataList) => {
  catalogContainer.textContent = "";
  const listCard = dataList.map(createCard);
  catalogContainer.append(...listCard);
  addHandlerTrack();
};

const init = () => {
  renderCatalog(dataMusic);
};

init();
