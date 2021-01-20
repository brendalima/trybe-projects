import React from 'react';
import PropTypes from 'prop-types';

const AddCartButton = ({ title, test, price }) => {
  const addCart = () => {
    const Storage = JSON.parse(sessionStorage.getItem('product'));
    let productJson = JSON.stringify([{ title, price, quantity: 1 }]);
    if (Storage) {
      productJson = JSON.stringify([...Storage, { title, price, quantity: 1 }]);
      sessionStorage.setItem('product', productJson);
    } else {
      sessionStorage.setItem('product', productJson);
    }
  };
  return (
    <div>
      <button type="button" onClick={ addCart } data-testid={ test }>
        Add Carrinho
      </button>
    </div>
  );
};

AddCartButton.propTypes = {
  title: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default AddCartButton;
