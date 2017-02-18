import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux';


class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newListTitle: ''
        };
    }

    addList() {

        if(this.state.newListTitle) {
            this.props.addList(this.state.newListTitle);
            this.setState({newListTitle: ''});
        }
    };

    newTitleChange(event) {

        this.setState({newListTitle: event.target.value});

    };

    onSelect(item){
        this.props.onSelect(item);
    }

    render() {
        const {items} = this.props;
        return (
            <div>
                <h1> List </h1>
                <div>
                    <input type="text" value={this.state.newListTitle}  onChange={this.newTitleChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>Add List</button>

                </div>
                <ul>
                    {items && items.map(item => {
                        return (
                            <li key={item.id} onClick={this.onSelect.bind(this,item)}>
                                {item.title}
                            </li>)

                    })}

                </ul>


            </div>
        );
    }
}

export default Todo;