var a = +prompt("Enter a lenght");
var b = +prompt("Enter b lenght");
var c = +prompt("Enter c lenght");

var p = (a + b + c) / 2;
var s = +Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);

if (s <= 0) {
  console.log('Incorrect data');
} else if (pythagorean(a,b,c) || pythagorean(a,c,b) || pythagorean(b,c,a)){
  console.log('Type of triangle is right triangle and square is ' + s);
} else if (a == b && b == c){
  console.log('Type of triangle is equilateral triangle and square is ' + s);
} else if (a == b || b == c || a == c) {
  console.log('Type of triangle is isosceles triangle and square is ' + s);
} else {
  console.log('Type of triangle is scalene triangle and square is ' + s);
}

function pythagorean(a, b, c){
  return ((a*a)+(b*b)) == (c*c);
}
