const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

// Your questions array (add all 40 questions here)
const questions = [
    {
        question: "What is an exoplanet?",
        options: [
            "A planet outside our solar system",
            "A planet in our solar system",
            "A type of star",
            "A type of comet"
        ],
        correct: 0
    },
    {
        question: "Which method is commonly used to discover exoplanets?",
        options: [
            "Transit method",
            "Astrometry",
            "Parallax method",
            "Radio signals"
        ],
        correct: 0
    },
    {
        question: "What does the term 'habitable zone' refer to?",
        options: [
            "A region where life can exist",
            "A zone with no stars",
            "The area around a black hole",
            "A zone with only gas giants"
        ],
        correct: 0
    },
    {
        question: "Which of the following is NOT a method for detecting exoplanets?",
        options: [
            "Doppler spectroscopy",
            "Transit photometry",
            "Astrobiology",
            "Gravitational microlensing"
        ],
        correct: 2
    },
    {
        question: "Which exoplanet was the first to be discovered around a sun-like star?",
        options: [
            "HD 209458 b",
            "51 Pegasi b",
            "Kepler-186f",
            "Proxima Centauri b"
        ],
        correct: 1
    },
    {
        question: "What is the primary gas in the atmosphere of Jupiter?",
        options: [
            "Hydrogen",
            "Oxygen",
            "Carbon Dioxide",
            "Helium"
        ],
        correct: 0
    },
    {
        question: "What is the hottest exoplanet discovered to date?",
        options: [
            "HD 189733 b",
            "WASP-121 b",
            "WASP-76 b",
            "KELT-9 b"
        ],
        correct: 3
    },
    {
        question: "What is a 'Super-Earth'?",
        options: [
            "A planet larger than Earth but smaller than Neptune",
            "A planet smaller than Earth",
            "A gas giant planet",
            "A terrestrial planet"
        ],
        correct: 0
    },
    {
        question: "Which spacecraft is primarily used for exoplanet research?",
        options: [
            "Hubble Space Telescope",
            "Voyager 1",
            "Kepler Space Telescope",
            "Cassini"
        ],
        correct: 2
    },
    {
        question: "Which star system contains the nearest known exoplanet?",
        options: [
            "Alpha Centauri",
            "Sirius",
            "Betelgeuse",
            "Proxima Centauri"
        ],
        correct: 3
    },
    {
        question: "Which of the following exoplanets is known for its extreme winds?",
        options: [
            "HD 189733 b",
            "WASP-121 b",
            "Kepler-22b",
            "TRAPPIST-1 d"
        ],
        correct: 0
    },
    {
        question: "What is the primary method used by the Kepler mission to discover exoplanets?",
        options: [
            "Direct imaging",
            "Transit method",
            "Gravitational lensing",
            "Radial velocity"
        ],
        correct: 1
    },
    {
        question: "Which type of star is most likely to host exoplanets?",
        options: [
            "Red dwarfs",
            "Blue giants",
            "Yellow supergiants",
            "White dwarfs"
        ],
        correct: 0
    },
    {
        question: "What does the term 'light year' measure?",
        options: [
            "Distance",
            "Time",
            "Brightness",
            "Temperature"
        ],
        correct: 0
    },
    {
        question: "What is the name of the first exoplanet discovered using the transit method?",
        options: [
            "HD 209458 b",
            "51 Pegasi b",
            "WASP-2 b",
            "GJ 1214 b"
        ],
        correct: 0
    },
    {
        question: "What is the main characteristic of a gas giant?",
        options: [
            "Mostly composed of gases",
            "Solid surface",
            "Rich in water",
            "Has rings"
        ],
        correct: 0
    },
    {
        question: "What is the main component of Saturn's rings?",
        options: [
            "Ice and rock",
            "Gas",
            "Dust",
            "Liquid methane"
        ],
        correct: 0
    },
    {
        question: "Which exoplanet is known for having a retrograde orbit?",
        options: [
            "Venus",
            "Neptune",
            "Uranus",
            "HD 209458 b"
        ],
        correct: 2
    },
    {
        question: "What is the significance of the term 'Goldilocks zone'?",
        options: [
            "The zone where conditions are just right for liquid water",
            "A zone with gold resources",
            "A zone too close to a star",
            "A zone with no planets"
        ],
        correct: 0
    },
    {
        question: "Which exoplanet is often referred to as 'the second Earth'?",
        options: [
            "Kepler-186f",
            "Proxima Centauri b",
            "Earth 2.0",
            "Mars"
        ],
        correct: 0
    },
    {
        question: "Which method of exoplanet detection involves measuring a star's wobble?",
        options: [
            "Transit method",
            "Radial velocity method",
            "Direct imaging",
            "Eclipse method"
        ],
        correct: 1
    },
    {
        question: "What is the primary focus of astrobiology?",
        options: [
            "The search for extraterrestrial life",
            "The study of stars",
            "The formation of galaxies",
            "The history of Earth"
        ],
        correct: 0
    },
    {
        question: "Which planet has the highest number of known moons?",
        options: [
            "Jupiter",
            "Saturn",
            "Mars",
            "Neptune"
        ],
        correct: 1
    },
    {
        question: "What was the first exoplanet discovered in the habitable zone?",
        options: [
            "Kepler-22b",
            "Gliese 581g",
            "Proxima Centauri b",
            "LHS 1140 b"
        ],
        correct: 0
    },
    {
        question: "What is a potential sign of life on an exoplanet?",
        options: [
            "Presence of oxygen",
            "High temperatures",
            "Low atmospheric pressure",
            "No water"
        ],
        correct: 0
    },
    {
        question: "Which of the following is a type of exoplanet with a solid surface?",
        options: [
            "Rocky planet",
            "Gas giant",
            "Ice giant",
            "Brown dwarf"
        ],
        correct: 0
    },
    {
        question: "What is the largest exoplanet discovered to date?",
        options: [
            "HD 100546 b",
            "WASP-121 b",
            "HD 209458 b",
            "WASP-17 b"
        ],
        correct: 3
    },
    {
        question: "What does the term 'exoplanet' stand for?",
        options: [
            "A planet outside our solar system",
            "A planet in our solar system",
            "A star's moon",
            "A comet"
        ],
        correct: 0
    },
    {
        question: "Which exoplanet has the shortest year?",
        options: [
            "WASP-76 b",
            "WASP-121 b",
            "HD 189733 b",
            "KELT-9 b"
        ],
        correct: 3
    },
    {
        question: "What is a potential method for terraforming an exoplanet?",
        options: [
            "Introducing Earth-like plants",
            "Increasing its mass",
            "Decreasing its temperature",
            "Removing its atmosphere"
        ],
        correct: 0
    },
    {
        question: "What is the main goal of the James Webb Space Telescope?",
        options: [
            "Study the early universe",
            "Look for exoplanets",
            "Explore the solar system",
            "Map the stars"
        ],
        correct: 1
    },
    {
        question: "What is the significance of the Kepler mission?",
        options: [
            "It discovered thousands of exoplanets",
            "It studied black holes",
            "It mapped the Milky Way",
            "It explored Mars"
        ],
        correct: 0
    },
    {
        question: "What is the primary component of an exoplanet's atmosphere that can indicate habitability?",
        options: [
            "Oxygen",
            "Nitrogen",
            "Carbon Dioxide",
            "Methane"
        ],
        correct: 0
    },
    {
        question: "Which exoplanet was discovered using the gravitational microlensing technique?",
        options: [
            "OGLE-2005-BLG-390Lb",
            "Kepler-22b",
            "WASP-17b",
            "HD 189733b"
        ],
        correct: 0
    },
    {
        question: "What does the term 'tidally locked' mean in relation to exoplanets?",
        options: [
            "One side always faces its star",
            "It has multiple suns",
            "It rotates rapidly",
            "It has a solid core"
        ],
        correct: 0
    },
    {
        question: "Which of the following is a characteristic of 'Hot Jupiters'?",
        options: [
            "They are gas giants very close to their stars",
            "They are rocky planets",
            "They are cold",
            "They have long orbits"
        ],
        correct: 0
    },
    {
        question: "What type of planet is Proxima Centauri b suspected to be?",
        options: [
            "Rocky",
            "Gas giant",
            "Ice giant",
            "Super-Earth"
        ],
        correct: 0
    },
    {
        question: "What is the primary challenge in studying exoplanet atmospheres?",
        options: [
            "They are too far away",
            "They are too small",
            "They lack significant light",
            "They are too cold"
        ],
        correct: 0
    },
    {
        question: "Which of the following instruments is used to directly image exoplanets?",
        options: [
            "Interferometers",
            "Radio telescopes",
            "Optical telescopes",
            "Space probes"
        ],
        correct: 0
    },
    {
        question: "What is the main advantage of the transit method?",
        options: [
            "It allows for the detection of multiple planets",
            "It can measure a planet's atmosphere",
            "It requires less time than other methods",
            "It is the only method used"
        ],
        correct: 1
    },
    {
        question: "What is the name of the first Earth-sized exoplanet found in the habitable zone of another star?",
        options: [
            "Kepler-186f",
            "Gliese 581d",
            "Proxima Centauri b",
            "LHS 1140 b"
        ],
        correct: 0
    }
];


// Function to shuffle the questions array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Shuffle the questions and select the first 10
shuffleArray(questions);
const selectedQuestions = questions.slice(0, 10);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    showQuestion(selectedQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = ''; // Clear previous answers

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(index, question.correct));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(selectedIndex, correctIndex) {
    const buttons = answerButtons.querySelectorAll('.btn');
    
    // Highlight the selected answer
    if (selectedIndex === correctIndex) {
        score++;
        buttons[selectedIndex].classList.add('correct');
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        // Highlight the correct answer
        buttons[correctIndex].classList.add('correct');
    }

    buttons.forEach(button => {
        button.disabled = true; // Disable all buttons
    });

    nextButton.style.display = 'block'; // Show next button
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion(selectedQuestions[currentQuestionIndex]);
        nextButton.style.display = 'none'; // Hide next button again
    } else {
        showScore();
    }
});

function showScore() {
    questionElement.innerText = `You scored ${score} out of ${selectedQuestions.length}`;
    answerButtons.innerHTML = ''; // Clear answers
    nextButton.style.display = 'none'; // Hide next button
}

startQuiz(); // Start the quiz when the script loads

