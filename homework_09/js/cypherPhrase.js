function cypherPhrase(obj, str) {
  return getTransformedArray(str, function(num){
    return obj[num] ? obj[num] : num;
  }).join('');
}
