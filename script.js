document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts
    const container = document.querySelector('.floating-hearts');
    const colors = ['#ff6b6b', '#ff8e8e', '#ffb3b3', '#ffd8d8', '#ff9e9e'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        
        // Random properties
        const size = Math.random() * 30 + 10;
        const duration = Math.random() * 3 + 3;
        const posX = Math.random() * window.innerWidth;
        const delay = Math.random() * 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Apply styles
        heart.style.left = `${posX}px`;
        heart.style.fontSize = `${size}px`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.color = color;
        
        container.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
    
    // Create initial hearts
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
    
    // Create new hearts periodically
    setInterval(createHeart, 300);
    
    // Create click hearts
    document.addEventListener('click', function(e) {
        const clickHeart = document.createElement('div');
        clickHeart.innerHTML = '❤️';
        clickHeart.classList.add('heart');
        clickHeart.style.left = `${e.clientX}px`;
        clickHeart.style.top = `${e.clientY}px`;
        clickHeart.style.fontSize = '40px';
        clickHeart.style.animationDuration = '4s';
        clickHeart.style.color = '#ff6b6b';
        
        container.appendChild(clickHeart);
        
        setTimeout(() => {
            clickHeart.remove();
        }, 4000);
    });
});