// create your App component here
import React, {Component} from 'react';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { people :[] };
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then( data => data.json())
        .then( data => {
            this.setState( {people:data.people})
        } )        
    }

    render() {
        return (
        this.state.people.map( person => (<p>{person.craft} {person.name}</p>))
        ) 
    }

}