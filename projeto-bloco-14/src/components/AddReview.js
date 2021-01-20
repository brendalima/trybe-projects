import React, { Component } from 'react';

class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {
        email: '',
        rating: '',
        comment: '',
      },
      history: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(field, newValue) {
    this.setState({ review: { [field]: newValue } });
  }

  handleSubmit() {
    this.setState((prevState) => ({ history: [...prevState.history, prevState.review] }));
  }

  render() {
    const { history } = this.state;
    return (
      <div>
        <h2>Avaliação</h2>
        <form>
          <input
            placeholder="E-mail"
            type="email"
            required="true"
            onChange={ (event) => this.updateState('email', event.target.value) }
          />
          <textarea
            placeholder="Escreva um comentário (opcional)"
            data-testid="product-detail-evaluation"
            onChange={ (event) => this.updateState('comment', event.target.value) }
          />
          <input
            placeholder="Avalie"
            id="evaluation"
            type="number"
            width="100px"
            min={ 1 }
            max={ 5 }
            required="true"
            onChange={ (event) => this.updateState('rating', event.target.value) }
          />
          <button
            type="button"
            onClick={ this.handleSubmit }
          >
            Avaliar
          </button>
        </form>
        <div>
          { history.map((item) => (
            <div key={ item.email }>
              <p>{ item.comment }</p>
              <p>{ item.rating }</p>
            </div>)) }
        </div>
      </div>
    );
  }
}

export default AddReview;
