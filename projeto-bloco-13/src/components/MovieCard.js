import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
        <h1>{this.props.movie.title}</h1>
        <p>{this.props.movie.storyline}</p>
        <Link to={`/movies/${this.props.movie.id}`}>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};
