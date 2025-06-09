const song = document.getElementById('song');
const icon = document.getElementById('icon');
const playSVG = `<path d="M8 5v14l11-7z"/>`;
const pauseSVG = `<path d="M6 19h4V5H6zm8-14v14h4V5h-4z"/>`;
let isPlaying = false;

function togglePlay(){
    if(isPlaying){
        song.pause();
        icon.innerHTML=playSVG;
    } else{
        song.play();
        icon.innerHTML=pauseSVG;
    }
    isPlaying=!isPlaying;
}
const links = document.querySelectorAll(".Info");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = this.href;
      }, 500);
    });
  });
  document.body.style.opacity = 0;
  window.addEventListener("load", () => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = 1;
  });