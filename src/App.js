import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import { useState, useEffect } from "react";

function App() {
  const apiKey = "e83f2134"

  const [movie, setMovie] = useState(null)

  const getMovie = async (searchTerm) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
    const data = await response.json();

    setMovie(data);
  }

  return (
    <div className="App">
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
      
    </div>
  );
}

export default App;
