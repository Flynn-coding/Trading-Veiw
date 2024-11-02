const canvas = document.createElement("canvas");
canvas.id = "matrixCanvas";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
const fontSize = 16;
const columns = canvas.width / fontSize;

// Array of drop positions, one for each column
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
    // Black background with slight opacity for trailing effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF00";
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, i) => {
        const text = matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);

        // Reset drop to top randomly or increase drop position
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    });
}

// Adjust canvas size on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Start the Matrix effect
setInterval(drawMatrix, 50);
