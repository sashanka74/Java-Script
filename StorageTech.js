function Signup() {
    let username = document.getElementById('name').value;
    let password = document.getElementById('Password').value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("uN", username);
    localStorage.setItem("Password", password);
    alert("Account Created");
}

function loginform() {
    let userName = document.getElementById("Name").value;
    let pwd = document.getElementById("password").value;

    let checkName = localStorage.getItem("uN");
    let checkPass = localStorage.getItem("Password");

    if (userName == checkName && pwd == checkPass) {
        alert("Welcome");
        document.getElementById("data").innerText = `Welcome ${userName}`;
    } 
    else {
        alert("Error");
        document.getElementById("data").innerText = "Invalid Credentials";
    }
}
function logout() {
    localStorage.removeItem("uN");
    localStorage.removeItem("Password");
    document.getElementById("data").innerText = "Logged out successfully";
    alert("Logged out");
}
