let movies = [
  {
    _id: 1,
    liked: "false",
    name: "test",
    title: "test title1",
    genre: "test genre",
    numberInStock: 2,
    dailyRentalRate: 2.5
  },
  {
    _id: 2,
    title: "test title2",
    name: "test2",
    genre: "genre",
    liked: "true",
    numberInStock: 0,
    dailyRentalRate: 2.3
  },
  {
    _id: 3,
    title: "test title3",
    liked: "true",
    name: "test3",
    genre: "test genre",
    numberInStock: 10,
    dailyRentalRate: 2
  },
  {
    _id: 4,
    name: "test4",
    liked: "false",
    title: "test title4",
    genre: "test genre",
    numberInStock: 7,
    dailyRentalRate: 5
  },
  {
    _id: 5,
    title: "test title5",
    liked: "false",
    genre: "test genre",
    name: "test5",
    numberInStock: 6,
    dailyRentalRate: 3.5
  },
  {
    _id: 6,
    liked: "false",
    title: "test title6",
    name: "test6",
    genre: "test genre",
    numberInStock: 60,
    dailyRentalRate: 4
  }
];
export function getMovies() {
  return movies;
}
export function getMovie(id) {
  return movies.find(m => m._id === id);
}
export function saveMovie(movie) {
  let dbMovie = movies.find(m => m._id === movie._id) || {};
  dbMovie.name = movie.name;
  dbMovie.genre = movie.genre;
  dbMovie.numberInStock = movie.numberInStock;
  dbMovie.dailyRentalRate = movie.dailyRentalRate;
  if (!dbMovie._id) {
    dbMovie._id = movie._id;
  }
  movies.push(dbMovie);
}
export function deleteMovie(id) {
  return movies.filter(m => m._id !== id);
}
