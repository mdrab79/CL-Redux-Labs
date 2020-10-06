import React, { Component } from 'react';
import User from "./User";

class App extends Component {
  render() {
    return (
      <div>
        <User firstName="Jan" lastName="Kowalski" age={44} onClick={ () => {}} />
        <hr/>
        <User firstName="Bożena" lastName="Kowalska" onClick={ () => {}} />
      </div>
    );
  }
}

export default App;
