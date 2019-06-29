// create your App component here
import React, { Component } from "react";

class App extends Component {
  state = {
    astros: []
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(data => data.json())
      .then(({ people }) => this.setState({ astros: people }));
  }

  render() {
    return (
      <div>
        {this.state.astros.map((astro, idx) => (
          <h3 key={idx}>{astro.name}</h3>
        ))}
      </div>
    );
  }
}

export default App;
