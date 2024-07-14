document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const number = document.querySelector('input[name="number"]').value;
    const message = document.querySelector('input[name="message"]').value;

    // Example of form data handling (e.g., send to server)
    console.log('Phone Number:', number);
    console.log('Message:', message);

    // Provide user feedback
    alert('Thank you for your feedback!');

    // Optionally, reset the form
    event.target.reset();
});
let search = document.querySelector('.search-container');

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
}