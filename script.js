document.getElementById('registration-form').addEventListener('submit', function (e) {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let isValid = true;

    // Clear previous error messages
    document.getElementById('username-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    // Username validation
    if (username.length < 3) {
        isValid = false;
        document.getElementById('username-error').textContent = 'Username must be at least 3 characters.';
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        isValid = false;
        document.getElementById('email-error').textContent = 'Invalid email format.';
    }

    // Password confirmation validation
    if (password !== confirmPassword) {
        isValid = false;
        document.getElementById('password-error').textContent = 'Passwords do not match.';
    }

    if (!isValid) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});
