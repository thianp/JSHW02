let user = prompt('please input your username');
let password;

if (user === null || user.trim() === '') {
    user = "guest";
    alert('welcome ' + user);
} else if (user === "codecamp") {
    password = prompt('please input your password');
} else {
    user = "guest";
    alert('welcome ' + user);
}

if (password === "123456") {
    user = "codecamp"; // ??? redundant ?
    alert('welcome ' + user);
} else if (password !== "123456" && password !== undefined) {
    alert('wrong password');
}
