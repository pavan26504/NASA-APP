const typingText = document.getElementById('typing-text');
const sentences = ["Welcome to Outer Space.........", "Let's Start your journey to Exoplanets"];
let sentenceIndex = 0;
let charIndex = 0;
const typingSpeed = 100; 
const pauseDuration = 1800; 

function typeSentence() {
  typingText.innerHTML = ''; 
  const currentSentence = sentences[sentenceIndex];

  const typingInterval = setInterval(() => {
    if (charIndex < currentSentence.length) {
      typingText.innerHTML += currentSentence.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typingInterval);
      setTimeout(() => {
        sentenceIndex = (sentenceIndex + 1) % sentences.length; 
        charIndex = 0; 
        typeSentence(); 
      }, pauseDuration);
    }
  }, typingSpeed);
}

typeSentence();

const hamburgerButton = document.getElementById('hamburger-button');
const navPane = document.getElementById('nav-pane');

let isNavOpen = false;

hamburgerButton.addEventListener('click', (event) => {
  event.stopPropagation(); 
  isNavOpen = !isNavOpen; 
  navPane.style.right = isNavOpen ? '0' : '-100%'; // Slide in/out
});

document.addEventListener('click', () => {
  if (isNavOpen) {
    isNavOpen = false;
    navPane.style.right = '-100%'; // Slide out
  }
});

navPane.addEventListener('click', (event) => {
  event.stopPropagation(); 
});
