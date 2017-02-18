export default function todoReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {title: action.title, listId: action.listId, id: action.id, done: false}];
        case 'UPDATE_TODO':

            const updatedState =  [...state];

            let todo = updatedState.find(todo => todo.id === action.id);
            const index = updatedState.indexOf(todo);

            updatedState[index] = Object.assign({}, todo, action.todo);

            return updatedState;

        default:
            return state;
    }
}