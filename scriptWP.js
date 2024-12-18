// "About Me" section bouncing circle
const aboutCircle = document.getElementById('bouncingAbout');
const aboutContainer = document.getElementById('aboutContainer');

// Initial position and velocity for the "About Me" circle
let x = 0;
let y = 0;
let vx = 2; // Horizontal speed
let vy = 2; // Vertical speed

function updateAboutPosition() {
    const containerWidth = aboutContainer.clientWidth;
    const containerHeight = aboutContainer.clientHeight;

    // Update position
    x += vx;
    y += vy;

    // Check for collisions with the edges of the container
    if (x <= 0 || x + aboutCircle.offsetWidth >= containerWidth) {
        vx = -vx; // Reverse horizontal direction
    }
    if (y <= 0 || y + aboutCircle.offsetHeight >= containerHeight) {
        vy = -vy; // Reverse vertical direction
    }

    // Apply new position to the circle
    aboutCircle.style.left = x + 'px';
    aboutCircle.style.top = y + 'px';

    // Continue the animation
    requestAnimationFrame(updateAboutPosition);
}

// Start the animation for "About Me" section
updateAboutPosition();

// "My Projects" section bouncing circle
const bouncingProject = document.getElementById('bouncingProject');
const projectContainer = document.getElementById('projectContainer');

// Initial position and velocity for the "My Projects" circle
let px = 0;
let py = 0;
let pvx = 4; // Horizontal speed
let pvy = 4; // Vertical speed

function updateProjectPosition() {
    const containerWidth = projectContainer.clientWidth;
    const containerHeight = projectContainer.clientHeight;

    // Update position
    px += pvx;
    py += pvy;

    // Check for collisions with the edges of the container
    if (px <= 0 || px + bouncingProject.offsetWidth >= containerWidth) {
        pvx = -pvx; // Reverse horizontal direction
    }
    if (py <= 0 || py + bouncingProject.offsetHeight >= containerHeight) {
        pvy = -pvy; // Reverse vertical direction
    }

    // Apply new position to the circle
    bouncingProject.style.left = px + 'px';
    bouncingProject.style.top = py + 'px';

    // Continue the animation
    requestAnimationFrame(updateProjectPosition);
}

// Start the animation for "My Projects" section
updateProjectPosition();

