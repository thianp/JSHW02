let num = prompt('input a number');

+num;

if (num < 0) {
    alert('negative number');
} else if (num == 0) {
    alert('zero');
} else if (num > 0) {
    alert('positive number');
} else {
    alert('invalid number');
}