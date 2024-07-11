document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const number = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Example of form data handling (e.g., send to server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Feedback:', feedback);

    // Provide user feedback
    alert('Thank you for your feedback!');

    // Optionally, reset the form
    event.target.reset();
});