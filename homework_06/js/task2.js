var eur = +prompt("Enter amount of EURO");
var usd = +prompt("Enter amount of USD");

var usdCurr = 27.4609;
var eurCurr = 33.8565;

console.log(+eur.toFixed(2) + ' euros are equal ' + +(eur * eurCurr).toFixed(2) + ' UAH, ' + +usd.toFixed(2) + ' dollars are equal ' + +(usd * usdCurr).toFixed(2) + ' UAH, one euro is equal ' + +(eurCurr / usdCurr).toFixed(2) + ' dollars.');
