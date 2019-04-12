import React, {Component} from 'react';
import CardList from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
        const { robots, searchfield } = this.state
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length?
            <h1>Loading</h1>:
            (
                <div className='tc'>
                    <h1>React Robots Project</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobot}/>   
                    </Scroll>
                </div>
                
            )    
    }

}
export default App