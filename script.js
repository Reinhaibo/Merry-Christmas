const btn = document.getElementById("enterBtn");
const cover = document.getElementById("cover");
const video = document.getElementById("christmasVideo");

btn.addEventListener("click", () => {
    // 1. 先尝试让视频在静音状态下跑起来（浏览器通常允许静音播放）
    video.muted = true; 
    
    // 2. 执行播放
    const playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            // 3. 播放成功后，立即切换显示并取消静音
            cover.style.display = "none";
            video.style.display = "block";
            video.muted = false; // 此时已经有用户点击，允许出声
        }).catch(error => {
            // 如果还是失败，在控制台打印原因
            console.error("播放失败原因:", error);
            alert("由于浏览器限制，请再次点击或更换浏览器访问");
        });
    }
});
