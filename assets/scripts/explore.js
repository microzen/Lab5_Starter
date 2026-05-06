// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const url = {'close':'smiling.png', 'open':'smiling-open.png'};
  const imgElement = document.querySelector('#explore img');
  const assets = './assets/'
  const voiceSelect = document.getElementById('voice-select');
  const button = document.querySelector('button');
  const inputTxt = document.getElementById('text-to-speak');
  let currVoice = null;
  let voices = [];
  let state = false;

  synth.onvoiceschanged = populateVoiceList;

  // event for listening for speaking
  setInterval(() => {
    const currUrl = imgElement.src;
    const openurl = `${assets}images/${url['open']}`
    if(synth.speaking == true){
      imgElement.src = openurl;
      
    }else{
      imgElement.src = `${assets}images/${url['close']}`;
    }
  }, 200);

  button.addEventListener('click', (e) => {
    e.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    utterThis.voice = currVoice;
    synth.speak(utterThis);
  });

  voiceSelect.addEventListener("change", (e) => {
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        currVoice = voice;
      }
    }
  });

  function populateVoiceList() {
    voices = synth.getVoices();
    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
  }
}
