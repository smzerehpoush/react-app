const genres = [
  {
    _id: 1,
    genre: "genre1"
  },
  {
    _id: 2,
    genre: "genre2"
  },
  {
    _id: 3,
    genre: "genre3"
  }
];
export function getGenres() {
  return genres;
}
export function getGenre(id) {
  return genres.find(m => m._id === id);
}
