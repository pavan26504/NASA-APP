let score = 0;
let timeLeft = 30;
let gameInterval;
let timerInterval;

const planetArea = document.getElementById('planetArea');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');

// Fun facts about planets
const planetFacts = {
    'Mercury': 'Mercury is the smallest planet in our solar system.',
    'Venus': 'Venus has a thick atmosphere full of carbon dioxide.',
    'Earth': 'Earth is the only planet known to support life.',
    'Mars': 'Mars is known as the red planet due to iron oxide on its surface.',
    'Jupiter': 'Jupiter is the largest planet in our solar system.',
    'Saturn': 'Saturn is famous for its rings made of ice and rock.',
    'Uranus': 'Uranus rotates on its side, making it unique.',
    'Neptune': 'Neptune is known for its strong winds and storms.',
    'Kepler-186f': 'Kepler-186f is an Earth-sized exoplanet in the habitable zone of its star.',
    // Add more planets or exoplanets as needed...
};

// Function to start the game
function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time: ${timeLeft}`;
    planetArea.innerHTML = '';
    startButton.disabled = true;

    gameInterval = setInterval(addPlanet, 1000);
    timerInterval = setInterval(updateTimer, 1000);
}

// Function to add a random planet
function addPlanet() {
    const planetNames = Object.keys(planetFacts);
    const planetName = planetNames[Math.floor(Math.random() * planetNames.length)];
    const planetElement = document.createElement('div');

    planetElement.className = 'planet';
    planetElement.style.width = '50px';
    planetElement.style.height = '50px';
    planetElement.style.backgroundColor = 'hsl(' + Math.floor(Math.random() * 360) + ', 70%, 50%)';
    planetElement.style.left = Math.random() * (planetArea.offsetWidth - 50) + 'px';
    planetElement.style.top = Math.random() * (planetArea.offsetHeight - 50) + 'px';
    planetElement.textContent = planetName;
    planetElement.style.display = 'flex';
    planetElement.style.alignItems = 'center';
    planetElement.style.justifyContent = 'center';
    planetElement.style.color = 'white';
    planetElement.style.fontSize = '12px';
    planetElement.style.borderRadius = '50%';
    
    planetElement.addEventListener('click', () => {
        score += 10; // Increase score on click
        scoreDisplay.textContent = `Score: ${score}`;
        alert(planetFacts[planetName]); // Show fact about the planet
        planetArea.removeChild(planetElement);
    });

    planetArea.appendChild(planetElement);
}

// Function to update the timer
function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = `Time: ${timeLeft}`;

    if (timeLeft <= 0) {
        clearInterval(gameInterval);
        clearInterval(timerInterval);
        alert(`Game Over! Your score is: ${score}`);
        startButton.disabled = false; // Enable the start button
    }
}

// Attach the start game function to the button
startButton.addEventListener('click', startGame);




