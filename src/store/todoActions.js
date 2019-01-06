import {ADDEDED_TODO, CHANGED_INFO, DELETED_TODO, TOGGLED_TODO} from "./actionTypes";

export const changeInfo = e => ({
    type: CHANGED_INFO,
    payload: e.target.value
});

export const addTodo = info => ({
   type: ADDEDED_TODO,
   payload: info
});

export const toggleTodo = id => ({
    type: TOGGLED_TODO,
    payload: id
});

export const deleteTodo = id => ({
    type: DELETED_TODO,
    payload: id
});