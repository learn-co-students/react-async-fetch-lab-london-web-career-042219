// create your App component here
import React, { Component } from "react";

const URL = "http://api.open-notify.org/astros.json";
class App extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({ people: data }));
  }

  render() {
    return this.state.people.map(person => (
      <p>
        {person.craft} {person.name}
      </p>
    ));
  }
}

export default App;
