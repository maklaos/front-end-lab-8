function getFilteredArray(arr, func) {
  let filteredArray = [];
  let i = 0;

  forEach(arr, function(num) {
    if (func(num)) {
      filteredArray[i] = num;
      i++;
    }
  });

  return filteredArray;
}
