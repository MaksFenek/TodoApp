// ==== React imports ====
import React, { useRef } from 'react';

// ==== Redux imports ====
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodoAction,
  changeCompletedAction,
  deleteTodoAction,
} from '../_Actions';

// ==== Style imports ====
import '../Styles/todolist.scss';

export default function TodoList() {
  // ==== Redux hooks ====
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // ==== React hooks ====
  const inputArea = useRef(null);

  // ==== Handle actions ====
  /* Adding a new task to store */
  const handleAdd = () => {
    if (inputArea.current.value !== '') {
      const newTodo = addTodoAction(inputArea.current.value);
      dispatch(newTodo);
      inputArea.current.value = '';
    } else {
      alert('Please add some text in input');
    }
  };

  /* Changing isCompleted in a task */
  const handleChange = (e) => {
    const newChange = changeCompletedAction(+e.target.value);
    dispatch(newChange);
  };

  /* Deleting a task */
  const handleDelete = (e) => {
    const newDelete = deleteTodoAction(+e.target.value);
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
          />
          <button className='todo-form-btn' type='submit' onClick={handleAdd}>
            Add
          </button>
        </div>
        <div className='todo-list'>
          <ul>
            {state.map(({ id, value, isCompleted }) => (
              <li key={id} className={isCompleted ? 'completed' : ''}>
                <input
                  value={id}
                  type='checkbox'
                  checked={isCompleted}
                  onChange={handleChange}
                />
                <h4>{value}</h4>
                <button value={id} type='button' onClick={handleDelete}>
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
