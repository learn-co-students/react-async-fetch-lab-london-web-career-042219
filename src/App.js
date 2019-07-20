// create your App component here
import React from 'react'
const URL = 'http://api.open-notify.org/astros.json'

class App extends React.Component {

  componentDidMount() {
    return fetch(URL).then(resp => resp.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div>

      </div>


    )


  }

}

export default App