// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}

          
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
