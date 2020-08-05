//Action constants
const ADD_TODO: string = 'ADD_TODO';
const CHANGE_COMPLETED: string = 'CHANGE_COMPLETED';
const DELETE_TODO: string = 'DELETE_TODO';

// ==== TypeScript types ====

type AddTodoType = {
  type: string;
  payload: {
    id: number;
    value: string;
    isCompleted: boolean;
  };
};

type ChangeTodoType = {
  type: string;
  payload: number;
};

// Action creators
export const addTodoAction = (value: string): AddTodoType => ({
  type: ADD_TODO,
  payload: {
    //Checking if local storage exist
    id: JSON.parse(localStorage.getItem('Tasks')!)
      ? //Taking last local storage task and using it like a counter
        1 +
        JSON.parse(localStorage.getItem('Tasks')!)[
          JSON.parse(localStorage.getItem('Tasks')!).length - 1
        ].id
      : 1,
    value,
    isCompleted: false,
  },
});

export const changeCompletedAction = (id: number): ChangeTodoType => ({
  type: CHANGE_COMPLETED,
  payload: id,
});

export const deleteTodoAction = (id: number): ChangeTodoType => ({
  type: DELETE_TODO,
  payload: id,
});
