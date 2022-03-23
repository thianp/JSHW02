let username = prompt('input your username');
if (username === "") {
    alert("username is required")
}

let password = prompt('input your password');
if (password === "") {
    alert("Password is required");
} else if (username === "admin" && password === "1234") {
    alert("Hello " + username);
} else if (username === "john" && password === "qwerty") {
    alert("Hello " + username);
} else {
    alert("Invalid username or password");
}