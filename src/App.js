//parent

import React, { Component } from 'react';
import './App.css';
import {data} from "./data"
import Messages from "./Messages";

class App extends Component {
  state = {messages: data}

onStarClick = (m) => {
  m.starred = !m.starred
  const messages = this.state.messages.map(message => {
    return message.id === m.id ? m : message
  })
  this.setState({
    messages
  })
}

onSelectedClick = (m) => {
  m.selected = !m.selected
  this.setState({
    messages:this.state.messages
  })
}

  render() {
    return (
      <div className="App">
        <Messages messages={ this.state.messages } onStarClick={this.onStarClick
         } onSelectedClick={this.onSelectedClick
        }
        />

      </div>
    );
  }
}

export default App;
