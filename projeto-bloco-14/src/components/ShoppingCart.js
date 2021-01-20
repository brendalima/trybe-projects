import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    const products = JSON.parse(sessionStorage.getItem('product'));
    this.renderProducts = this.renderProducts.bind(this);
    this.state = { products };
  }

  renderProducts() {
    const { products } = this.state;
    return products.map((product) => (
      <CartItems
        key={ product.title }
        title={ product.title }
        price={ product.price }
        quantity={ product.quantity }
      />
    ));
  }

  render() {
    const { products } = this.state;
    if (products) return <div>{ this.renderProducts() }</div>;

    return (
      <div>
        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default ShoppingCart;
