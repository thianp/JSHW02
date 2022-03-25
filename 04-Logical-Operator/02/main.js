if (-1 || 0) alert("first"); // works

if (-1 && 0) alert("second"); // doesn't work

if (null || (-1 && 1)) alert("third"); // works

// ??? -1 is true because in this case it is converted to a number rather than boolean (0 and 1)