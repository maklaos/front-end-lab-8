function reverseNumber(val) {
  let reversed = Math.abs(val).toString().split("").reverse().join("");
  return Number(reversed) * Math.abs(val) / val;
}
