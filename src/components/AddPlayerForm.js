import React, { Component } from 'react';

class AddPlayerForm extends Component {
  state = {
    value: '',
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { state, props } = this;
    if (state.value.trim() === '') return;
    props.addPlayer(state.value);
    this.setState({ value: '' });
  };

  render() {
    const { handleSubmit, state, handleValueChange } = this;
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.value}
          onChange={handleValueChange}
          placeholder="Enter a player's name"
        />
        <input type="submit" value="Add player" />
      </form>
    );
  }
}

export default AddPlayerForm;
