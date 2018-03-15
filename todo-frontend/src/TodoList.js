import React, {Component} from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import * as apiCalls from './api';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            todos: []
        };

        this.addTodo = this.addTodo.bind(this);
    }

    async addTodo(val){
        let newTodo = await apiCalls.addTodo(val);
        this.setState({todos: [...this.state.todos, newTodo]})
    }

    async deleteTodo(id){
        await apiCalls.removeTodo(id);
        let updatedTodos = this.state.todos.filter(todo => todo._id !== id);
        this.setState({todos: updatedTodos});
    }

    async updateTodo(todo){
        let updatedTodo = await apiCalls.updateTodo(todo);
        let todos = this.state.todos.map(todo => (
            (todo._id === updatedTodo._id)
                ? {...todo, completed: !todo.completed}
                : todo
        ));
        this.setState({todos: todos});
    }

    async loadTodos(){
        let todos = await apiCalls.getTodos();
        this.setState({todos});
    }

    componentWillMount(){
        this.loadTodos();
    }

    render() {
        const todos = this.state.todos.map((todo, index) => {
            return(
                <TodoItem
                    key={todo._id}
                    {...todo}
                    onDelete={this.deleteTodo.bind(this, todo._id)}
                    onToggle={this.updateTodo.bind(this, todo)}
                />
            )
        });

        return (
            <div>
                <TodoForm addTodo={this.addTodo}/>
                <ul>
                    {todos}
                </ul>
            </div>

        )
    }
}

export default TodoList;