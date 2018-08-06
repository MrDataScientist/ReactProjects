import React, { Component } from 'react';
import ConfirmButton from './confirmButton';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <ConfirmButton
                dialog={["Delete", "Are You Sure?", "Once more to delete"]}
                action={() => console.log("action!")}
            />
        </div>
    );
  }
}

export default App;
