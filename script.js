btn.addEventListener("click", () => {
  cover.style.display = "none";
  video.style.display = "block";
  video.muted = false; // 确保在用户交互后取消静音
  video.play().catch(error => {
    console.log("播放失败:", error);
  });
});
