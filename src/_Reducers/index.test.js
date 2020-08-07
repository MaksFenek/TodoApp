import Reducer from './index';
import * as actions from '../_Actions/index';

describe('Reducer should return', () => {
  const initialState = [
    {
      id: 1,
      value: 'Some text',
      isCompleted: false,
    },
  ];

  it('default state', () => {
    expect(Reducer([], {})).toEqual([]);
  });

  it('state with new task', () => {
    expect(Reducer([], actions.addTodoAction('Some text'))).toEqual([
      {
        id: 1,
        value: 'Some text',
        isCompleted: false,
      },
    ]);
  });

  it('state with changed task', () => {
    expect(Reducer(initialState, actions.changeCompletedAction(1))).toEqual([
      {
        id: 1,
        value: 'Some text',
        isCompleted: true,
      },
    ]);
  });

  it('state without the task', () => {
    expect(Reducer(initialState, actions.deleteTodoAction(1))).toEqual([]);
  });
});
