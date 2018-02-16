function collectIds(movies) {
  let bestMovies = getFilteredArray(movies, function(movie){
    return movie.rating > 3;
  });
  return getTransformedArray(bestMovies, function(movie){
    return movie.id;
  });
}
