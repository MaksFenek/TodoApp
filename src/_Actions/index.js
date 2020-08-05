//Action constants
const ADD_TODO = 'ADD_TODO';
const CHANGE_COMPLETED = 'CHANGE_COMPLETED';
const DELETE_TODO = 'DELETE_TODO';

let count = 4;
// Action creators
export const addTodoAction = (value) => ({
  type: ADD_TODO,
  payload: {
    id: count++,
    value,
    isCompleted: false,
  },
});

export const changeCompletedAction = (id) => ({
  type: CHANGE_COMPLETED,
  payload: id,
});

export const deleteTodoAction = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
