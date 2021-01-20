import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data.js';
import Header from './components/Header';

function App() {
  return (
    <body>
      <div className="App">
        <div>
          <Header />
          <MovieList movies={movies} />
        </div>
      </div>
    </body>
  );
}

export default App;
