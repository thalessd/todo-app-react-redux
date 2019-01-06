import {ADDEDED_TODO, CHANGED_INFO, DELETED_TODO, TOGGLED_TODO} from "./actionTypes";

const initialState = {
    info: '',
    list: []
};

function addTodoToList(list, info) {

    if(list.length === 0) {
        return [{ _id: 0, info, done: false, deleted: false }]
    }

    let lastId = list[list.length - 1]._id;

    return [...list, { _id: lastId + 1, info, done: false, deleted: false }];
}

function toggleTodo(list, id) {
    list[id].done = !list[id].done;
    return [...list]
}

function deleteTodo(list, id) {

    list[id].deleted = true;
    return [...list]
}

export default (state = initialState, action) => {

    switch (action.type) {
        case CHANGED_INFO:
            return { ...state, info: action.payload };
        case ADDEDED_TODO:
            if(state.info.length === 0) { return state }
            return { info: '', list: addTodoToList(state.list, action.payload)};
        case TOGGLED_TODO:
            return {...state, list: toggleTodo(state.list, action.payload)};
        case DELETED_TODO:
            return {...state, list: deleteTodo(state.list, action.payload)};
        default:
            return state;
    }

}