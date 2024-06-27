// script.js
function registerUser() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validate password match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Create user data object
    var userData = {
        username: username,
        email: email,
        password: password
    };

    // Store user data in localStorage
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful!");

    // Optionally clear form fields or perform other actions
    document.getElementById('username').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('confirmPassword').value = "";

    // Optionally redirect to login page
    // window.location.href = "../login/index.html";
}
