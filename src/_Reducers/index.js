// ==== Initial state ====
let initialState = [];

// Get the Tasks array from local storage if it exist
if (localStorage.getItem('Tasks')) {
  // Adding Tasks array item to Initial state
  JSON.parse(localStorage.getItem('Tasks')).map((item) =>
    initialState.push(item)
  );
}
// ==== Reducers ====

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
      // Set a new task at local storage array
      localStorage.setItem('Tasks', JSON.stringify([...state, payload]));
      return [...state, payload];

    case 'CHANGE_COMPLETED':
      // Get the local storage array
      let storageArr = JSON.parse(localStorage.getItem('Tasks'));
      // Adding the new local storage Array with item coincide with a received key
      let newStorage = storageArr.map((item) => {
        // Searching an task with the same id as payload
        if (item.id === payload) {
          // Changing the flag isCompleted in found item
          return {
            id: item.id,
            value: item.value,
            isCompleted: !item.isCompleted,
          };
        } else {
          return item;
        }
      });
      // Return new array with changed task
      localStorage.setItem('Tasks', JSON.stringify(newStorage));

      return state.map((task) => {
        if (task.id === payload) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });

    case 'DELETE_TODO':
      // Get the local storage array
      let storage = JSON.parse(localStorage.getItem('Tasks'));
      // Finding in local storage the items don't coincide with a received key
      storage.filter((item) => {
        if (item.id !== payload) {
          // Adding the new local storage Array with items don't coincide with a received key
          localStorage.setItem(
            'Tasks',
            JSON.stringify(storage.filter((task) => task.id !== payload))
          );
        } else if (storage.length === 1) {
          localStorage.removeItem('Tasks');
        }
      });
      return state.filter((item) => item.id !== payload);

    default:
      return state;
  }
};
