// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  controlId: 0,
  rates: {},
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_EXPENSE':
    action.expense.id = state.controlId;
    action.expense.exchangeRates = state.rates;
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
      controlId: state.controlId + 1,
    };
  case 'REQUEST':
    return { ...state, isLoading: true };
  case 'RECEIVE_SUCCESS':
    return { ...state, currencies: action.currencies, isLoading: false };
  case 'RECEIVE_ERROR':
    return { ...state, currencies: action.currencies, isLoading: false };
  case 'RECEIVE_FULL_EXCHANGE':
    return { ...state, rates: action.exchangeRates };
  default:
    return state;
  }
}

export default wallet;
