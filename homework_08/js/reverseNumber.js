function reverseNumber(val) {
  return Number(Math.abs(val).toString().split("").reverse().join("")) * Math.abs(val) / val;
}
