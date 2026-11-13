
const confirmButton = document.getElementById('confirmBtn');

const particleLayer = document.getElementById('particles');

// CRIAR PARTÍCULAS DOURADAS

function createFloatingParticles(total = 32) {

    for (let i = 0; i < total; i++) {

        const particle = document.createElement('span');

        particle.className = 'particle';

        particle.style.left = `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${7 + Math.random() * 10}s`;

        particle.style.animationDelay =
            `${Math.random() * 10}s`;

        const size = 2 + Math.random() * 4;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particleLayer.appendChild(particle);
    }
}

// EXPLOSÃO DE ESTRELAS

function sparkleBurst(button) {

    const rect = button.getBoundingClientRect();

    for (let i = 0; i < 24; i++) {

        const spark = document.createElement('span');

        spark.textContent =
            Math.random() > 0.5 ? '✦' : '·';

        spark.style.position = 'fixed';

        spark.style.left =
            `${rect.left + rect.width / 2}px`;

        spark.style.top =
            `${rect.top + rect.height / 2}px`;

        spark.style.zIndex = '9999';

        spark.style.pointerEvents = 'none';

        spark.style.color = '#ffe7a0';

        spark.style.fontSize =
            `${10 + Math.random() * 14}px`;

        spark.style.transition =
            'transform 900ms ease-out, opacity 900ms ease-out';

        document.body.appendChild(spark);

        const angle = (Math.PI * 2 * i) / 24;

        const distance = 45 + Math.random() * 65;

        requestAnimationFrame(() => {

            spark.style.transform =
                `translate(
                    ${Math.cos(angle) * distance}px,
                    ${Math.sin(angle) * distance}px
                ) rotate(160deg)`;

            spark.style.opacity = '0';

        });

        setTimeout(() => spark.remove(), 950);
    }
}

// INICIAR PARTÍCULAS

createFloatingParticles();

// CONFIRMAR PRESENÇA

confirmButton.addEventListener('click', () => {

    sparkleBurst(confirmButton);

    const message =
        'Olá! Quero confirmar minha presença no aniversário de 15 anos da Allana, no Clube Aurora, às 18h30.';

    const whatsappUrl =
        `https://wa.me/?text=${encodeURIComponent(message)}`;

    setTimeout(() => {

        window.open(
            whatsappUrl,
            '_blank',
            'noopener,noreferrer'
        );

    }, 180);

});
