import {
  addTodoAction,
  changeCompletedAction,
  deleteTodoAction,
} from './index';

describe('Actions', () => {
  const id = 1;
  const text = 'Some interesting text';
  const localStorageArray = JSON.parse(localStorage.getItem('Tasks'));

  it('should return a new state with new task', () => {
    expect(addTodoAction(text)).toEqual({
      type: 'ADD_TODO',
      payload: {
        id: localStorageArray
          ? 1 + localStorageArray[localStorageArray.length--].id
          : 1,
        value: text,
        isCompleted: false,
      },
    });
  });

  it('should return an id', () => {
    expect(changeCompletedAction(id)).toEqual({
      type: 'CHANGE_COMPLETED',
      payload: id,
    });
  });

  it('should return an id of deleting task', () => {
    expect(deleteTodoAction(id)).toEqual({
      type: 'DELETE_TODO',
      payload: id,
    });
  });
});
