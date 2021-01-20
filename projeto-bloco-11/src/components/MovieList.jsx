// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        { this.props.movies.map((item) => <MovieCard key={item.title} movie={item} />) }
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
