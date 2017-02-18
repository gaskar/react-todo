let nextTodoId = 1;


export const addToDo = (title, listId) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        listId,
        title
    }
};

export const updateToDo = (id, todo) => {
    return {
        type: 'UPDATE_TODO',
        id,
        todo
    }
};


