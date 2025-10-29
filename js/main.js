// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add click handlers to investment buttons
document.querySelectorAll('.invest-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Investment functionality would connect to your backend system. This includes KYC verification, payment processing, and equity distribution.');
    });
});
