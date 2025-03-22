document.addEventListener('DOMContentLoaded', () => {
    const logoWrapper = document.querySelector('#logo-wrapper');
    const logoContainer = document.querySelector('#logo-container');
    const logo = logoContainer.getElementsByTagName('img');
    
    // Mouse move handler for the wrapper
    logoWrapper.addEventListener('mousemove', (e) => {
        const rect = logoWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate distance from center
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        // Tilt effect based on mouse position
        const tiltX = deltaY * 15;
        const tiltY = -deltaX * 15;
        
        // Apply transforms
        logo.style.transform = `
            perspective(1000px)
            rotateX(${tiltX}deg)
            rotateY(${tiltY}deg)
            scale(1.05)
            translateZ(30px)
        `;
    });

    // Reset effects when mouse leaves
    logoWrapper.addEventListener('mouseleave', () => {
        logo.style.transform = '';
    });
}); 