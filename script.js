const heartContainer = document.getElementById('heart-container');

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('particle-heart');
    
    // Randomize heart types
    const types = ['❤', '💗', '💖', '💕', '✨'];
    heart.innerText = types[Math.floor(Math.random() * types.length)];
    
    // Randomize position and size
    heart.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 15 + 10; // 10px to 25px
    heart.style.fontSize = size + 'px';
    
    // Randomize animation speed
    const duration = Math.random() * 3 + 5; // 5s to 8s
    heart.style.animationDuration = duration + 's';
    
    // Add to container
    heartContainer.appendChild(heart);
    
    // Cleanup to prevent memory lag
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Generate a heart every 400ms
setInterval(createFloatingHeart, 400);