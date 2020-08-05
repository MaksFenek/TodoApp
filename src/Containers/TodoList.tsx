// ==== React imports ====
import React, { useRef } from 'react';

// ==== Redux imports ====
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
  useDispatch,
} from 'react-redux';
import {
  addTodoAction,
  changeCompletedAction,
  deleteTodoAction,
} from '../_Actions';

// ==== Style imports ====
import '../Styles/todolist.scss';

// ==== TypeScript types ====
import { StateType } from '../_Reducers';

// ==== Main ====
export default function TodoList() {
  // ==== Redux hooks ====
  const useSelector: TypedUseSelectorHook<Array<StateType>> = useReduxSelector;
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // ==== React hooks ====
  const inputArea = useRef<HTMLInputElement>(null!);

  // ==== Handle actions ====
  /* Adding a new task to store */
  const handleAdd = () => {
    if (inputArea.current!.value !== '') {
      const newTodo = addTodoAction(inputArea.current!.value);
      dispatch(newTodo);
      inputArea.current.value = '';
    } else {
      alert('Please add some text in input');
    }
  };

  const handleAddEnter = ({
    key,
  }: React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>): void => {
    if (inputArea.current.value !== '' && key === 'Enter') {
      const newTodo = addTodoAction(inputArea.current.value);
      dispatch(newTodo);
      inputArea.current.value = '';
    }
  };

  /* Changing isCompleted in a task */
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const newChange = changeCompletedAction(+e.currentTarget.value);
    dispatch(newChange);
  };

  /* Deleting a task */
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const newDelete = deleteTodoAction(+e.currentTarget.id);
    dispatch(newDelete);
  };

  return (
    <section className='todo'>
      <div className='container'>
        <div className='todo-header'>
          <h2 className='todo-header-title'>Add your Todos</h2>
        </div>
        <div className='todo-form'>
          <input
            className='todo-form-input'
            type='text'
            placeholder='Add new todo'
            ref={inputArea}
            onKeyPress={handleAddEnter}
          />
          <button className='todo-form-btn' type='button' onClick={handleAdd}>
            Add
          </button>
        </div>
        <div className='todo-list'>
          <ul>
            {state.map(({ id, value, isCompleted }: StateType) => (
              <li key={id} className={isCompleted ? 'completed' : ''}>
                <input
                  value={id}
                  type='checkbox'
                  checked={isCompleted}
                  onChange={handleChange}
                />
                <h4>{value}</h4>
                <button id={`${id}`} type='button' onClick={handleDelete}>
                  &times;
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
