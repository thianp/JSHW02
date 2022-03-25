alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 1 2 - runs until hits a truthy value, functions are falsy
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // 1 undefined - at 1 the system is checking what's inside the brackets and executing the first item, however alert(1) turns out to be undefined and so the alert as a whole returns undefined
alert(null || (2 && 3) || 4); // 3 - null is falsy, so the alert skips that and goes to (2 && 3) which is truthy, but selects only 3 because both items inside are truthy