function getFilteredArray(arr, func) {
  return arr.filter(func);
}

//test
function predicateFunction(num) {
  return num > 3;
}
console.log('\ngetFilteredArray:');
console.log(getFilteredArray([1, 7, 20], predicateFunction));
