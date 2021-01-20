import React from 'react';
import PropTypes from 'prop-types';

const CartItems = ({ title, price, quantity }) => (
  <div>
    <p data-testid="shopping-cart-product-name">
      { title }
    </p>
    <p>
      Preço: R$
      { price }
    </p>
    <p data-testid="shopping-cart-product-quantity">
      Qtde:
      { quantity }
    </p>
  </div>
);

CartItems.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default CartItems;
