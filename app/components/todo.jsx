import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux';




class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newTodoTitle: ''
        };
    }

    toggleTodo(todo) {
        todo.done = !todo.done;
        this.props.updateToDo(todo.id, todo);
    };

    addToDo() {
        if(this.state.newTodoTitle) {
            this.props.addToDo(this.state.newTodoTitle, this.props.listId);
            this.setState({
                newTodoTitle: ''
            });
        }
    };

    newTitleChange(event) {
        this.setState({newTodoTitle: event.target.value});
    };

    render() {
        const {toDos} = this.props;
        return (
            <div>
                <h1>Todo</h1>

                <div>
                    <input type="text" value={this.state.newTodoTitle}  onChange={this.newTitleChange.bind(this)} />
                    <button onClick={this.addToDo.bind(this)}>Add Todo</button>

                </div>
                <ul>
                    {toDos && toDos.map(toDo => {
                        return (
                            <li key={toDo.id}
                                onClick={() => this.toggleTodo(toDo)}
                                style={{
                                      textDecoration: toDo.done ? 'line-through' : 'none'
                                    }}
                            >
                                {toDo.title}
                            </li>)

                    })}

                </ul>

            </div>
        );
    }
}

export default Todo;