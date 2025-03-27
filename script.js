function toggleVideoPopup() {
    const videoPopup = document.getElementById("videoPopup");
    const youtubeFrame = document.getElementById("youtubeFrame");
    
    videoPopup.classList.toggle("show");

    if (videoPopup.classList.contains("show")) {
        youtubeFrame.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; 
    } else {
        youtubeFrame.src = ""; 
    }
}
