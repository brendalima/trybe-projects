import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddReview from './AddReview';
import AddCartButton from './AddCartButton';
import CartIcon from '../assets/cart.svg';

class ProductDetails extends Component {
  render() {
    const {
      location: {
        state: { productName, productImg, productPrice },
      },
    } = this.props;
    return (
      <div>
        <Link to="/">
          Voltar
        </Link>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={ CartIcon } className="cart-icon" alt="Carrinho de compras" />
        </Link>
        <div>
          <h2 data-testid="product-detail-name">{ productName }</h2>
          <h3>{`R$ ${productPrice}`}</h3>
          <img alt="product" src={ productImg } />
        </div>
        <div>
          <AddReview />
          <AddCartButton
            title={ productName }
            price={ productPrice }
            test="product-detail-add-to-cart"
          />
        </div>
      </div>
    );
  }
}

export default ProductDetails;

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      productName: PropTypes.string,
      productImg: PropTypes.string,
      productPrice: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
