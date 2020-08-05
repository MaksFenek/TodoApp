// import { count } from '../_Reducers';
//Action constants
const ADD_TODO = 'ADD_TODO';
const CHANGE_COMPLETED = 'CHANGE_COMPLETED';
const DELETE_TODO = 'DELETE_TODO';

// let storage = JSON.parse(localStorage.getItem('Tasks'));
// let storage = JSON.parse(localStorage.getItem('Tasks'));
// console.log(storage[storage.length - 1].id);

// let count = storage ? storage[storage.length - 1].id + 1 : 0;
// Action creators
// console.log(count);
export const addTodoAction = (value) => ({
  type: ADD_TODO,
  payload: {
    id: JSON.parse(localStorage.getItem('Tasks'))
      ? 1 +
        JSON.parse(localStorage.getItem('Tasks'))[
          JSON.parse(localStorage.getItem('Tasks')).length - 1
        ].id
      : 1,
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
