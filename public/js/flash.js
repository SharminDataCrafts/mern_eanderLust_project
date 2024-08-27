document.addEventListener('DOMContentLoaded', () => {
    // Select flash message elements
    const flashMessages = document.querySelectorAll('.flash-message');
    
    // Set timeout to hide messages
    flashMessages.forEach(message => {
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                message.remove(); // Remove element from DOM after fade out
            }, 600); // Match this delay with the fade-out duration
        }, 2000); // Show message for 2 seconds
    });
});