function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

//test
console.log('forEach:');
forEach([3, 5, 2], function(el) {
  console.log(el);
});
