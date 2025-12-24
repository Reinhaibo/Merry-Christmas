const btn = document.getElementById("enterBtn");
const cover = document.getElementById("cover");
const video = document.getElementById("christmasVideo");

btn.addEventListener("click", () => {
  cover.style.display = "none";
  video.style.display = "block";
  video.play();
});