function validateForm() {
    let name = document.getElementById("fullname").value.trim();
    let password = document.getElementById("password").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}
