const d = prompt("Enter a date");
const timeDiff = Date.now() - Date.parse(d);
const timeDiffYears = Math.floor(timeDiff / 1000 / 3600 / 24 / 365);
console.log(`it has been ${timeDiffYears} years since your date`);
