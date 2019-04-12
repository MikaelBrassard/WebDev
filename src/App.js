import React, {Component} from 'react';
import CardList from './Cardlist';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {

    constructor() {
        super()
        console.log("Constructor")
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        console.log("DidMount");
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users => this.setState({robots: users}))        
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render()
    {
        console.log("Render")
        const filteredRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if (this.state.robots.length === 0 ) { 
            return <h1>Loading</h1>
        }
        else{
            return(
                <div className='tc'>
                    <h1>React Robots Project</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobot}/>   
                </div>
                
            )    
        }
    }

}
export default App