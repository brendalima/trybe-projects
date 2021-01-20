// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Rating extends React.Component {
  render() {
    return (
      <div className="movie-card-rating">
        <span className="rating">
          {this.props.rating}
        </span>
      </div>);
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;
