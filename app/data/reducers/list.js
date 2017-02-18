export default function listReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_LIST':
            console.log(state, action);
            return  [...state, {title: action.title, id: action.id}];
        default:
            return state;
    }
}