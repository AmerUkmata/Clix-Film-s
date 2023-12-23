function submitForm(event) {
    event.preventDefault();

    var emailInput = document.getElementById("email");
    var errorMessage = document.getElementById("error-message");
    var successMessage = document.getElementById("success-message");

    // Simple email validation
    var email = emailInput.value;
    if (!isValidEmail(email)) {
        errorMessage.innerText = "Invalid email address";
        successMessage.innerText = "";
        return;
    }

    // Simulate form submission (replace with your actual backend logic)
    // For demonstration purposes, we'll just show a success message.
    errorMessage.innerText = "";
    successMessage.innerText = "Subscription successful!";

    // Clear the input field
    emailInput.value = "";
}

function isValidEmail(email) {
    // Basic email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}