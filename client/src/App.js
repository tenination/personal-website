import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';
import Homepage from './Homepage';
import Renovation from './Renovation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Renovation />
      </div>
    );
  }
}

export default App;
