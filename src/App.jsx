// ==== React imports ====
import React from "react";

// ==== Components imports ====
import Navbar from "./Components/Navbar";
import TodoList from "./Containers/TodoList";

function App() {
  return (
    <>
      <Navbar />
      <TodoList />
    </>
  );
}

export default App;
