import Todo from './todo';
import List from './list';
import React, {PropTypes, Component} from 'react';
import {connect, Provider} from "react-redux";
import {groupBy} from "lodash";
import {addList} from "../data/actions/listAction";
import {addToDo, updateToDo} from "../data/actions/todoAction";



const mapStateToProps = (state) => {
    return {
        toDos: state.toDos,
        listItems: state.lists
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (title, listId) => {
            dispatch(addToDo(title, listId))
        },
        addList: (title) => {
            dispatch(addList(title))
        },
        updateToDo: (id, todo) => {
            dispatch(updateToDo(id, todo));
        }
    }
};


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedListId: null
        }
    }

    onListIdSelect(listItem) {
        this.setState({
            selectedListId: listItem.id
        });
    }

    addList(list){
        this.setState({selectedListId:null});
        this.props.addList(list)
    }

    render() {
        const {toDos}  = this.props;
        const {selectedListId} = this.state;
        return (

                <div className="container">
                    <div className="list-container">
                        <List items={this.props.listItems}
                              onSelect={this.onListIdSelect.bind(this)}
                              addList={this.addList.bind(this)}
                        />
                    </div>
                    <div className="todo-container">
                        {selectedListId &&
                        <Todo listId={selectedListId}
                              toDos={toDos.filter(todo => todo.listId == selectedListId)}
                              addToDo={this.props.addToDo}
                              updateToDo={this.props.updateToDo}
                        />}
                    </div>
                </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);