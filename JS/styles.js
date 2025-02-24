// Animación de aparición del header
window.addEventListener('load', () => {
    const header = document.querySelector('.header');
    header.classList.add('active');
});

// Smooth scroll para futuros enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto hover mejorado para móviles
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('touchstart', function() {
        this.style.transition = 'transform 0.1s ease';
        this.style.transform = 'scale(1.1)';
    });
    
    icon.addEventListener('touchend', function() {
        this.style.transform = 'scale(1)';
    });
});

(function() {
    // Animación de aparición del título
    const servicesTitle = document.querySelector('.services-main-title');
    
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });

    titleObserver.observe(servicesTitle);

    // Animación escalonada de las tarjetas
    const serviceCards = document.querySelectorAll('.service-item');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, 150 * index);
            }
        });
    }, { threshold: 0.25 });

    serviceCards.forEach(card => {
        card.style.transform = 'translateY(20px) scale(0.95)';
        card.style.opacity = '0';
        card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        cardObserver.observe(card);
    });

    // Efecto hover mejorado
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
})();


document.addEventListener('DOMContentLoaded', () => {
    // Animación del título
    const title = document.querySelector('.why-us-main-title');
    const cards = document.querySelectorAll('.benefit-card');
    
    // Observador para el título
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });

    titleObserver.observe(title);

    // Animación escalonada de tarjetas
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.aosDelay || 0;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay);
            }
        });
    }, { threshold: 0.25 });

    cards.forEach(card => {
        cardObserver.observe(card);
    });

    // Efecto parallax en hover
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.removeProperty('--mouse-x');
            card.style.removeProperty('--mouse-y');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Efecto de movimiento en partículas
    const ctaSection = document.querySelector('.final-cta');
    
    ctaSection.addEventListener('mousemove', (e) => {
        const particles = document.querySelector('.cta-particles');
        const x = e.clientX / window.innerWidth * 50;
        const y = e.clientY / window.innerHeight * 50;
        particles.style.backgroundPosition = `${x}% ${y}%`;
    });

    // Animación de brillo en botón
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.style.setProperty('--mouse-x', x);
        this.style.setProperty('--mouse-y', y);
    });
});