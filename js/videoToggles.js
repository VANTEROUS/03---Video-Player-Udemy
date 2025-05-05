

const playButton = document.querySelector('.video_play');
const stopButton = document.querySelector('.video_stop');
const video = document.querySelector('.video_videoSrc');
const duration = document.querySelector('.video_time');
const progressBar = document.querySelector('.video_progress');



console.dir(document.querySelector('video'));

playButton.addEventListener('click', ()=>{
    if(playButton.classList.contains('video_play')){
        playButton.classList.remove('video_play');
        playButton.classList.add('video_pause');
        playVideo(video);
    } else {
        playButton.classList.remove('video_pause');
        playButton.classList.add('video_play');
        pauseVideo(video);
    }
})
stopButton.addEventListener('click', ()=>{
    video.pause();
    video.currentTime = 0; 
    playButton.classList.remove('video_pause');
    playButton.classList.add('video_play');
})

video.addEventListener('timeupdate', () => {
    const current = video.currentTime;
    const minutes = Math.floor(current / 60);
    const seconds = Math.floor(current % 60).toString().padStart(2, '0');
    duration.innerHTML = `${minutes}:${seconds}`;
    progressBar.value = ((video.currentTime * 100)/ video.duration);
});

const playVideo = (video) => {
    video.play()   
}
const pauseVideo = (video) => {
    video.pause()  
}

progressBar.addEventListener('change', ()=>{
    video.currentTime = (progressBar.value * video.duration) / 100;
})



video.addEventListener('click', ()=>{
    if(playButton.classList.contains('video_play')){
        playButton.classList.remove('video_play');
        playButton.classList.add('video_pause');
        playVideo(video);
    } else {
        playButton.classList.remove('video_pause');
        playButton.classList.add('video_play');
        pauseVideo(video);
    }
})