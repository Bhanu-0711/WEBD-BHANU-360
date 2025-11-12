function validateForm() {
    let name = document.getElementById("fullname").value.trim();
    let password = document.getElementById("password").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }
    let phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }
}
