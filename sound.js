// Click / Win / Lose sounds
const clickSound = new Audio("https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg");
const winSound = new Audio("https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg");
const loseSound = new Audio("https://actions.google.com/sounds/v1/cartoon/boing.ogg");

// Background music
const bgMusic = new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_7c3a7b0d7f.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.4;

function playClick(){ clickSound.play(); }
function playWin(){ winSound.play(); }
function playLose(){ loseSound.play(); }

function toggleMusic(){
  if(bgMusic.paused){ bgMusic.play(); }
  else{ bgMusic.pause(); }
}
