import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import CategoriesList from './CategoriesList';
import ProductsList from './ProductsList';
import CartIcon from '../assets/cart.svg';

// code idea based on <GP-7><Thx!!>

class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      productList: [],
    };
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchByCategory = this.fetchByCategory.bind(this);
  }

  handleTypeChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    this.fetchProducts();
  }

  async fetchProducts() {
    const { query } = this.state;
    const products = await api.getProductsFromCategoryAndQuery('', query);
    this.setState({ productList: products.results });
  }

  async fetchByCategory(categoryId) {
    const products = await api.getProductsFromCategoryAndQuery(categoryId, '');
    this.setState({ productList: products.results });
  }

  render() {
    const { productList } = this.state;
    return (
      <div>
        <div>
          <div>
            <input
              name="query"
              className="search-bar-input"
              type="text"
              data-testid="query-input"
              onChange={ this.handleTypeChange }
            />
          </div>
        </div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={ CartIcon } className="cart-icon" alt="Carrinho de compras" />
        </Link>
        <div data-testid="home-initial-message">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </div>
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <CategoriesList fetchByCategory={ this.fetchByCategory } />
        <ProductsList productList={ productList } />
      </div>
    );
  }
}

export default Home;
