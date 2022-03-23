let login = prompt("Enter username");
let message;

login == "Employee" ? message = "Hello" : login == "Director" ? message = "Greetings" : login == "" ? message = "No login" : message = "";

// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }

alert(message);