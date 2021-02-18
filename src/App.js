import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
// import DadJokes from './DadJokes'

class App extends Component {
  constructor() {   // always add constructor and super
    super()

    this.state={
      jokes: []         //api data usually in array
    }
  }
  componentDidMount = () => {
    axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => {
      this.setState({
        jokes: response.data
      })
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dad Jokes</h1>
        </header>
        
        <div className="newJoke">
        {this.state.jokes.joke}
        </div>
        
        <div className="button">
        <button onClick={this.componentDidMount}>New Joke</button>
        </div>
      </div>
    );
  }
}

export default App;
