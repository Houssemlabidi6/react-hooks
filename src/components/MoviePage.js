// components/MoviePage.js
import React from "react";
import { Link, useParams } from "react-router-dom";

const MoviePage = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/">Back to Movie List</Link>
    </div>
  );
};

export default MoviePage;
