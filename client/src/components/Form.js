import React from 'react';

export default class Form extends React.Component {
  state = {
    input: ''
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      input: ''
    })
  }

  render () {
    return (
      <form>
        <input
          name = 'input'
          placeholder = 'Give Input'
          value = {this.state.input}
          onChange = {e => this.change(e)}/>
        <br />
        <button onClick = {e => this.onSubmit(e)}>Submit</button>
      </form>
    )
  }
}