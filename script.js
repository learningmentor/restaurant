document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservation-form');
    const formMessage = document.getElementById('form-message');

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page from refreshing

        // Get form values
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const guests = document.getElementById('guests').value;

        // In a real application, you would send this data to a backend server here
        
        // Display success message
        formMessage.textContent = `Thank you, ${name}! Your table for ${guests} on ${date} has been requested. We will email you a confirmation shortly.`;
        formMessage.className = 'success';
        
        // Clear the form
        form.reset();

        // Hide the message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'hidden';
            formMessage.textContent = '';
        }, 5000);
    });
    
    // Add simple scroll effect for navbar
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            nav.style.padding = '1rem 5%';
        } else {
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            nav.style.padding = '1.5rem 5%';
        }
    });
});