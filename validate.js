const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // You should implement your own logic to validate the username and password here
    // For this example, let's assume the username is 'user' and the password is 'password'
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Login failed. Please check your credentials.');
    }
});
