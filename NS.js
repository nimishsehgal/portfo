// NS.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href').substring(1); // Extract the target ID from the href attribute
        const targetElement = document.getElementById(targetId); // Get the target element by ID

        if (targetElement) { // Check if the target element exists
            let offset = 0; // Set the offset for scrolling

            // If the target is not the home section, add a small offset to scroll above the target
            if (targetId !== 'home') {
                offset = -50; // Adjust the offset as needed
            }

            window.scrollTo({ // Use smooth scrolling behavior
                top: targetElement.offsetTop + offset, // Scroll to the top position of the target element with offset
                behavior: 'smooth' // Enable smooth scrolling behavior
            });
        }
    });
});

// Handle form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission behavior

        // Get form data
        const formData = new FormData(form);

        // Send form data asynchronously using Fetch API
        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            // Handle successful response
            console.log('Message sent successfully!');
            // Reload the page after form submission
            window.location.reload();
        })
        .catch(error => {
            // Handle error
            console.error('Error sending message:', error);
            // You can add code here to show an error message or perform any other error handling
        });
    });
});
