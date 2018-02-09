var eur = parseFloat(prompt("Enter amount of EURO"));
var usd = parseFloat(prompt("Enter amount of USD"));

var usdCurr = 27.4609;
var eurCurr = 33.8565;

console.log(Number(eur.toFixed(2)) + ' euros are equal ' + Number((eur * eurCurr).toFixed(2)) + ' UAH, ' + Number(usd.toFixed(2)) + ' dollars are equal ' + Number((usd * usdCurr).toFixed(2)) + ' UAH, one euro is equal ' + Number((eurCurr / usdCurr).toFixed(2)) + ' dollars.');
