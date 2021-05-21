  
const audio = document.getElementById("bulbasauraudio");
audio.onclick = function() {
    alert("The video has started to play")
};

const soundBtn = document.getElementById("bulbasauraudio");
let bulbasauraudio = document.getElementsByName('bulbasaur.mp3');
soundBtn.addEventListener('click',()=>{
    bulbasauraudio.play();
});