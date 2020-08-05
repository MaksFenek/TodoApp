// ==== Initial state ====
export const initialState = [
  {
    id: 1,
    value: 'Learn new framework',
    isCompleted: false,
  },
  {
    id: 2,
    value: 'Learn JS',
    isCompleted: false,
  },
  {
    id: 3,
    value: 'Create todo app',
    isCompleted: false,
  },
];

// ==== Reducers ====

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
      return [...state, payload];

    case 'CHANGE_COMPLETED':
      return state.map((task) => {
        if (task.id === payload) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });

    case 'DELETE_TODO':
      return state.filter((item) => item.id !== payload);

    default:
      return state;
  }
};
