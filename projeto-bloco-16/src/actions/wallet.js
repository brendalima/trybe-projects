export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});

const request = () => ({
  type: 'REQUEST',
});

const receiveSuccess = (exchangeData) => ({
  type: 'RECEIVE_SUCCESS',
  currencies: Object.keys(exchangeData),
});

const receiveFullExchange = (fullExchangeData) => ({
  type: 'RECEIVE_FULL_EXCHANGE',
  exchangeRates: fullExchangeData,
});

const receiveError = (error) => ({
  type: 'RECEIVE_ERROR',
  currencies: [error],
});

export function apiFetchThunk() {
  return async (dispatch) => {
    try {
      dispatch(request());
      const requestCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
      const result = await requestCurrencies.json();
      delete result.USDT;
      dispatch(receiveFullExchange(result));
      dispatch(receiveSuccess(result));
    } catch (error) {
      dispatch(receiveError(error));
    }
  };
}
