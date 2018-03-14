import React, { Component } from 'react';
import './App.css';
import ToDoList from './TodoList';


class App extends Component {

    render() {
        return (
            <div className="App">
                <ToDoList todos={this.state}/>
            </div>
        );
    }
}

export default App;
