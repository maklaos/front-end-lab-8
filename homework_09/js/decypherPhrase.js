function decypherPhrase(obj, str) {
  forEach(Object.keys(obj), function(key){
    obj[obj[key]] = key;
  });
  return cypherPhrase(obj, str);
}
