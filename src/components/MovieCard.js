import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const imgStyle = {
    width: "200px",
    height: "300px",
    objectFit: "cover",
  };

  return (
    <Link to={`/movie/${movie.id}`}>
      <Card className="movie-card">
        <Card.Img
          variant="top"
          src={movie.posterURL}
          alt={movie.title}
          style={imgStyle}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>Rating: {movie.rating}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MovieCard;
