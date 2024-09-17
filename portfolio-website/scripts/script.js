document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Fetching values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (name === '' || email === '' || message === '') {
    alert('All fields are required!');
  } else {
    alert('Thank you for reaching out! I will get back to you soon.');
    
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
});
