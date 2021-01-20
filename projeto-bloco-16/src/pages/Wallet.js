import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './components/Form';
import Table from './components/Table';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.sumExpenses = this.sumExpenses.bind(this);
    this.reduceExchange = this.reduceExchange.bind(this);
  }

  sumExpenses(acc, currValue) {
    const baseValue = parseFloat(currValue.value);
    const multiplier = parseFloat(currValue.exchangeRates[currValue.currency].ask);
    return acc + baseValue * multiplier;
  }

  reduceExchange(value) {
    return value.reduce((acc, currValue) => this.sumExpenses(acc, currValue), 0);
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">
            { this.reduceExchange(expenses).toString() }
          </span>
          <span data-testid="header-currency-field">Câmbio: BRL</span>
        </header>
        <Form />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.string.isRequired,
};
