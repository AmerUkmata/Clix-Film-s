function register() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var userExists = users.some(user => user.username === username);
    if (username.trim() === "" || password.trim() === "" || email.trim()=== "") {
        errorMessage.innerText = "Fill in all the boxes.";
        return; // Exit the function if any field is empty
    }

    if (!userExists) {
        users.push({ username: username, password: password, email: email });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
        redirectToHomepage();
    } else {
        errorMessage.innerText = "Username already exists. Choose a different username.";
    }
}

function redirectToHomepage() {
    // Replace this with the actual URL of your homepage
    window.location.href = "../index.html";
}