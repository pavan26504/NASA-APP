const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

let isGameActive = false;
let score = 0;
const gravity = 0.7;
let spaceship, planets = [], lasers = [], aliens = [];
let alienSpawnInterval; // Variable to hold the spawn interval

// Spaceship Class
class Spaceship {
    constructor() {
        this.x = 100;
        this.y = 200;
        this.width = 50;
        this.height = 50;
        this.velocity = 0;
        this.image = new Image();
        this.image.src = 'spaceship.png'; // Add spaceship image
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update() {
        this.y += this.velocity;
        this.velocity += gravity;

        if (this.y + this.height > canvas.height) {
            this.velocity = 0;
            this.y = canvas.height - this.height;
        }
    }

    hop() {
        this.velocity = -15;  // Hop upwards
    }
}

// Laser Class
class Laser {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 5;
        this.speed = 5;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.x += this.speed;
    }
}

// Planet Class
class Planet {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = 2;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.x -= this.speed;
        if (this.x + this.radius < 0) {
            this.x = canvas.width + this.radius;
            this.y = Math.random() * canvas.height;
            score += 1;
            document.getElementById('score').textContent = `Score: ${score}`;
        }
    }
}

// Alien Class
class Alien {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.speed = 3;
        this.image = new Image();
        this.image.src = 'alien.png'; // Add alien image
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update() {
        this.x -= this.speed;
        if (this.x + this.width < 0) {
            this.x = canvas.width + Math.random() * 300;
            this.y = Math.random() * canvas.height;
        }
    }
}

// Initialize Game
function init() {
    spaceship = new Spaceship();
    planets = [];
    lasers = [];
    aliens = [];
    for (let i = 0; i < 5; i++) {
        const radius = 50 + Math.random() * 30;
        const x = canvas.width + i * 200;
        const y = Math.random() * canvas.height;
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random planet colors
        planets.push(new Planet(x, y, radius, color));
    }

    // Generate initial aliens
    for (let i = 0; i < 3; i++) {
        const x = canvas.width + Math.random() * 300;
        const y = Math.random() * canvas.height;
        aliens.push(new Alien(x, y));
    }

    // Spawn aliens continuously
    alienSpawnInterval = setInterval(() => {
        const x = canvas.width + Math.random() * 300;
        const y = Math.random() * canvas.height;
        aliens.push(new Alien(x, y));
    }, 2000); // Adjust the interval time as desired (e.g., every 2 seconds)
}

// Handle shooting lasers and spaceship movement
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && isGameActive) {
        spaceship.hop();
    } else if (e.code === 'KeyZ' && isGameActive) {  // Press "Z" to shoot lasers
        lasers.push(new Laser(spaceship.x + spaceship.width, spaceship.y + spaceship.height / 2));
    }
});

// Animation Loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    spaceship.draw();
    spaceship.update();

    planets.forEach(planet => {
        planet.draw();
        planet.update();
    });

    aliens.forEach(alien => {
        alien.draw();
        alien.update();

        // Collision detection between spaceship and aliens
        const dist = Math.hypot(spaceship.x - alien.x, spaceship.y - alien.y);
        if (dist < spaceship.width / 2 + alien.width / 2) {
            gameOver();
        }
    });

    lasers.forEach((laser, laserIndex) => {
        laser.draw();
        laser.update();

        // Remove lasers that move off-screen
        if (laser.x > canvas.width) {
            lasers.splice(laserIndex, 1);
        }

        // Collision detection between lasers and aliens
        aliens.forEach((alien, alienIndex) => {
            if (laser.x < alien.x + alien.width && laser.x + laser.width > alien.x &&
                laser.y < alien.y + alien.height && laser.y + laser.height > alien.y) {
                aliens.splice(alienIndex, 1);  // Remove alien if hit
                lasers.splice(laserIndex, 1);  // Remove laser after hitting
            }
        });
    });

    if (isGameActive) {
        requestAnimationFrame(animate);
    }
}

// Start the game
document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('gameOverlay').style.display = 'none';
    isGameActive = true;
    score = 0;
    init();
    animate();
});

// Game Over
function gameOver() {
    isGameActive = false;
    clearInterval(alienSpawnInterval); // Stop the alien spawning when game over
    document.getElementById('gameOverlay').style.display = 'flex';
    document.getElementById('startBtn').textContent = 'Play Again';
}




