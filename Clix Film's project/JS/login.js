function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Basic authentication check (replace with your authentication logic)
    if (username === "user" && password === "password") {
        alert("Login successful!");
        // Redirect to another page or perform additional actions
    } else {
        errorMessage.innerText = "Invalid username or password";
    }
}
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Basic authentication check (replace with your authentication logic)
    if (username === "user" && password === "password") {
        alert("Login successful!");
        redirectToHomepage(); // Call the function to redirect
    } else {
        errorMessage.innerText = "Invalid username or password";
    }
}

function redirectToHomepage() {
    // Replace this with the actual URL of your homepage
    window.location.href = "../index.html";
}