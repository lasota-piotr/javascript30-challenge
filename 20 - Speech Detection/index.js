window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let pElement = document.createElement('P');
const words = document.querySelector('.words');
words.appendChild(pElement);

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
  pElement.textContent = transcript;
  if (e.results[0].isFinal) {
    pElement = document.createElement('p');
    words.appendChild(pElement);
  }
  if (transcript.includes('Podaj pogodę')) {
    console.log('28°C');
  }
});

recognition.addEventListener('end', recognition.start);

recognition.start();

