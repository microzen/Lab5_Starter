// expose.js

window.addEventListener('DOMContentLoaded', init);

const config = new Map();
config.set('air-horn',{img:'air-horn.svg',sound:'air-horn.mp3',animatioin:false})
config.set('car-horn',{img:'car-horn.svg',sound:'car-horn.mp3',animatioin:false})
config.set('party-horn',{img:'party-horn.svg',sound:'party-horn.mp3',animatioin:true})
const assetsUrl = './assets/';

function init() {
  const selectElement = document.getElementById('horn-select');
  const volumeElement = document.querySelector('#volume');
  const imgElement = document.querySelector('#expose img');
  const button = document.querySelector('#expose button'); 
  const audio = document.querySelector('#expose audio');
  const volumeIcon = document.querySelector('#volume-controls img')
  const jsConfetti = new JSConfetti();

  // selector chanage
  selectElement.addEventListener('change',(e)=>{
    if(config.has(e.target.value)){
        const data = config.get(e.target.value);
        const url = `${assetsUrl}images/${data.img}`;
        imgElement.src = url;
    }
  });

  // button event
  button.addEventListener('click',(e)=>{
    const currState = selectElement.value;
    console.log(currState);
    if(config.has(currState)){
      const data = config.get(currState);
      const url = `${assetsUrl}audio/${data.sound}`;
      audio.src = url;
      audio.play();
      if(data.animatioin){
        jsConfetti.addConfetti();
      }
    }
  });

  // set volume
  volumeElement.addEventListener('input',(e)=>{
    const volume = e.target.value;
    console.log(volume);
    
    if(volume == 0){
      volumeIcon.src = `${assetsUrl}icons/volume-level-0.svg`;
    }else if(volume < 33){
      volumeIcon.src = `${assetsUrl}icons/volume-level-1.svg`;
    }else if(volume < 66){
      volumeIcon.src = `${assetsUrl}icons/volume-level-2.svg`;
    }else{
      volumeIcon.src = `${assetsUrl}icons/volume-level-3.svg`;
    }
    
    audio.volume = (0.01 * volume);
    
  });
}