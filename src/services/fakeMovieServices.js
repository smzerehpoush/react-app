let movies = [
  {
    _id: 1,
    liked: "false",
    name: "test",
    title: "test title1",
    genre: "genre1",
    numberInStock: 2,
    dailyRentalRate: 2.5
  },
  {
    _id: 2,
    title: "test title2",
    name: "test2",
    genre: "genre2",
    liked: "true",
    numberInStock: 0,
    dailyRentalRate: 2.3
  },
  {
    _id: 3,
    title: "test title3",
    liked: "true",
    name: "test3",
    genre: "genre1",
    numberInStock: 10,
    dailyRentalRate: 2
  },
  {
    _id: 4,
    name: "test4",
    liked: "false",
    title: "test title4",
    genre: "genre3",
    numberInStock: 7,
    dailyRentalRate: 5
  },
  {
    _id: 5,
    title: "test title5",
    liked: "false",
    genre: "genre3",
    name: "test5",
    numberInStock: 6,
    dailyRentalRate: 3.5
  },
  {
    _id: 6,
    liked: "false",
    title: "test title6",
    name: "test6",
    genre: "genre1",
    numberInStock: 60,
    dailyRentalRate: 4
  }
];
export function getMovies() {
  return movies;
}
export function getMovie(id) {
  return movies.find(m => m._id === Number(id));
}
export function saveMovie(movie) {
  let dbMovie = movies.find(m => m._id === movie._id) || {};
  dbMovie.title = movie.name;
  dbMovie.name = movie.name;
  dbMovie.genre = movie.genre;
  dbMovie.numberInStock = movie.numberInStock;
  dbMovie.liked = movie.liked;
  dbMovie.dailyRentalRate = movie.dailyRentalRate;
  if (!dbMovie._id) {
    dbMovie._id = movie._id;
  }
  movies.push(dbMovie);
}
export function deleteMovie(id) {
  return movies.filter(m => m._id !== id);
}
export function getNewMovieId() {
  let maxId = movies[0]._id;
  movies.forEach(item => {
    maxId = maxId > item._id ? maxId : item._id;
  });
  return ++maxId;
}
