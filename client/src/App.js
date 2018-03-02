import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';
import Homepage from './Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
