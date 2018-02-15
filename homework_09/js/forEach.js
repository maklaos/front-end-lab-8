function forEach(arr, func) {
  arr.forEach(func);
}

//test
console.log('forEach:');
forEach([3, 5, 2], function(el) {
console.log(el);
});
