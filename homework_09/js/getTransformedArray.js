function getTransformedArray(arr, func) {
  return arr.map(func);
}

//test
function increment(num) {
  return num + 1;
}
console.log('\ngetTransformedArray:');
console.log(getTransformedArray([1, 7, 20], increment));
