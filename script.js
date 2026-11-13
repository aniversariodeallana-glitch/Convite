
const welcomeScreen = document.getElementById("welcomeScreen");
const openInvitation = document.getElementById("openInvitation");
const mainInvitation = document.getElementById("mainInvitation");
const particleLayer = document.getElementById("particles");

openInvitation.addEventListener("click", () => {
    welcomeScreen.style.opacity = "0";
    welcomeScreen.style.transform = "scale(0.96)";

    setTimeout(() => {
        welcomeScreen.style.display = "none";
        mainInvitation.classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, 800);
});

function createFloatingParticles(total = 35) {
    for (let i = 0; i < total; i++) {
        const particle = document.createElement("span");

        particle.className = "particle";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${7 + Math.random() * 10}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;

        const size = 2 + Math.random() * 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particleLayer.appendChild(particle);
    }
}

createFloatingParticles();
