import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'

class App extends Component {

  state = {
    fields: {},
    output: []
  }

  onSubmit = (fields) => {
    this.setState({ fields });
    fetch(`/getData?input=${fields.input}`)
      .then(res => res.json())
      .then(resJson => {this.setState({output: resJson});})
  }

  render() {
    const listItems = this.state.output.map((entry) => <span>{entry.text}: {entry.size}<br/></span>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Enter to find</h1>
        </header>
        <br />
        <Form onSubmit={fields => this.onSubmit(fields)}/>
        <br />
        <div>{listItems}</div>
        <p> {}</p>
      </div>
    );
  }
}

export default App;
