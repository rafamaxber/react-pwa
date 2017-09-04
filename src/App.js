import React, { Component } from 'react'

class App extends Component {

  render() {
  
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {
            `${JSON.stringify(process.env, null, 3)}`
          }
        </p>
      </div>
    );
  }
}

export default App;
