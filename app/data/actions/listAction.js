let nextListId = 1;

export const addList = (title) => {
    return {
        type: 'ADD_LIST',
        id: nextListId++,
        title
    }
};