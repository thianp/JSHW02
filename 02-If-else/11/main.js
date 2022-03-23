let score = prompt("Enter score");
let grade;
+score;

score >= 80 ? grade = "A" : score >= 70 ? grade = "B" : score >= 60 ? grade = "C" : score >= 50 ? grade = "D" : score < 50 ? grade = "F" : grade = "";
alert("Your grade is " + grade);