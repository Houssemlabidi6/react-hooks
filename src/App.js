// App.js
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Spider Man",
      description:
        "After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      rating: 7.5,
    },
    {
      title: "Harry Potter",
      description:
        "The story begins when 11-year-old orphan Harry discovers that his parents were wizards and he starts his education in magic at Hogwart's School of Witchcraft and Wizardry.",
      posterURL:
        "https://fossbytes.com/wp-content/uploads/2021/02/A-poster-of-Harry-Potter-and-the-Goblet-of-Fire-Harry-Potter-movies-in-order.jpg",
      rating: 8.5,
    },
    {
      title: "Joker",
      description:
        "Set in 1981, it follows Arthur Fleck, a failed clown and aspiring stand-up comic whose descent into mental illness and nihilism inspires a violent countercultural revolution against the wealthy in a decaying Gotham City.",
      posterURL:
        "https://openthemagazine.com/wp-content/uploads/2019/10/JOker.jpg",
      rating: 6.5,
    },
    {
      title: "Batman",
      description:
        "Batman was originally introduced as a ruthless vigilante who frequently killed or maimed criminals, but evolved into a character with a stringent moral code and strong sense of justice.",
      posterURL:
        "https://i.insider.com/62261331990863001998ad10?width=1136&format=jpeg",
      rating: 9.2,
    },
  ]);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState("");

  const handleTitleChange = (event) => {
    setFilterTitle(event.target.value);
  };

  const handleRateChange = (event) => {
    setFilterRate(event.target.value);
  };

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (!filterRate || movie.rating >= filterRate)
    );
  });

  return (
    <div className="app">
      <Navbar />
      <h1>Movie List</h1>
      <Filter
        title={filterTitle}
        rate={filterRate}
        onTitleChange={handleTitleChange}
        onRateChange={handleRateChange}
      />
      <br />
      <MovieList movies={filteredMovies} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newMovie = {
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            posterURL: e.target.elements.posterURL.value,
            rating: parseFloat(e.target.elements.rating.value),
          };
          handleAddMovie(newMovie);
          e.target.reset();
        }}
      >
        <input type="text" name="title" placeholder="Title" required />
        <input
          type="text"
          name="description"
          placeholder="Description"
          required
        />
        <input type="url" name="posterURL" placeholder="Poster URL" required />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          step="0.1"
          min="0"
          max="10"
          required
        />
        <button type="submit">Add Movie</button>
      </form>
      <hr />
      <Footer />
    </div>
  );
};

export default App;
