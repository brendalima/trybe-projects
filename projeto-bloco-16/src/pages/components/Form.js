import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.resetState = this.resetState.bind(this);
    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  componentDidMount() {
    const { apiFetchThunk } = this.props;
    apiFetchThunk();
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  resetState() {
    this.setState({
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  render() {
    const { addExpense, currencies, apiFetchThunk } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form>
          <input
            name="value"
            value={ value }
            data-testid="value-input"
            placeholder="Valor"
            onChange={ this.handleInput }
          />
          <input
            name="description"
            value={ description }
            type="text"
            data-testid="description-input"
            placeholder="Descrição"
            onChange={ this.handleInput }
          />
          <select
            name="currency"
            value={ currency }
            data-testid="currency-input"
            onChange={ this.handleInput }
          >
            {currencies && currencies.map((item) => (
              <option key={ item } data-testid={ item }>{item}</option>
            ))}
          </select>
          <select
            name="method"
            value={ method }
            data-testid="method-input"
            onChange={ this.handleInput }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
          <select
            name="tag"
            value={ tag }
            data-testid="tag-input"
            onChange={ this.handleInput }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <button
            type="button"
            onClick={ () => {
              apiFetchThunk();
              addExpense(this.state);
              this.resetState();
            } }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = {
  addExpense: actions.addExpense,
  apiFetchThunk: actions.apiFetchThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  apiFetchThunk: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
