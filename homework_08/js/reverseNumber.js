function reverseNumber(val) {
  return Number((val / Math.abs(val)) * Math.abs(val).toString().split("").reverse().join(""));
}
