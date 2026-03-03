const tracks = [
  { title: "Neon Skyline", artist: "Luna Echo" },
  { title: "Morning Espresso", artist: "City Tempo" },
  { title: "Rainy Streets", artist: "Nova Pulse" },
  { title: "Midnight Drive", artist: "Kairo" },
  { title: "Ocean Breath", artist: "Saffron" },
  { title: "Golden Hour", artist: "Velvet Noon" },
];

const albumGrid = document.getElementById("albumGrid");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const playButton = document.getElementById("play");
const themeToggle = document.getElementById("themeToggle");

let currentTrack = -1;
let playing = false;

function renderCards() {
  tracks.forEach((track, index) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="cover"></div>
      <h3>${track.title}</h3>
      <p>${track.artist}</p>
    `;
    card.addEventListener("click", () => selectTrack(index));
    albumGrid.appendChild(card);
  });
}

function selectTrack(index) {
  currentTrack = index;
  songTitle.textContent = tracks[index].title;
  songArtist.textContent = tracks[index].artist;
  playing = true;
  playButton.textContent = "⏸";
}

playButton.addEventListener("click", () => {
  if (currentTrack < 0) {
    selectTrack(0);
    return;
  }
  playing = !playing;
  playButton.textContent = playing ? "⏸" : "▶";
});

document.getElementById("next").addEventListener("click", () => {
  const nextIndex = (currentTrack + 1) % tracks.length;
  selectTrack(nextIndex);
});

document.getElementById("prev").addEventListener("click", () => {
  const prevIndex = (currentTrack - 1 + tracks.length) % tracks.length;
  selectTrack(prevIndex);
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

renderCards();
