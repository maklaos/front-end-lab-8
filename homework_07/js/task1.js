let N = 0;

while (N <= 0 || N > 20 || !Number.isInteger(N)) {
  N = Number(prompt('Enter natural number between 1 and 20'));
}

let space = '   ';
let block = '[~]';

let result = '';

for (let i = 1; i <= N; i++) {

  for (let j = 0; j < N-i; j++) {
    result += space;
  }

  for (let k = 0; k < i*2-1; k++) {
    result += block;
  }

  result += '\n';
}

console.log(result);
