// SCROLL ANIMATION
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        if (card.getBoundingClientRect().top < window.innerHeight - 100) {
            card.classList.add('show');
        }
    });
});

// FLOATING HEARTS
setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 300);

// COUNTDOWN (if on homepage)
const timer = document.getElementById("timer");

if (timer) {
    const weddingDate = new Date("May 7, 2026 18:59:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const d = weddingDate - now;

        const days = Math.floor(d / (1000*60*60*24));
        const hours = Math.floor((d % (1000*60*60*24)) / (1000*60*60));

        timer.innerHTML = days + " Days " + hours + " Hours";
    }, 1000);
}
