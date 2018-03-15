import React, { Component } from 'react';
import './App.css';
import ToDoList from './TodoList';
import Navbar from './Navbar';


class App extends Component {

    render() {
        return (
            <div className="App">
                <Navbar/>
                <ToDoList todos={this.state}/>
            </div>
        );
    }
}

export default App;
