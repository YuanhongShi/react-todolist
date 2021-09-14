import React from "react";
import "./App.css";

import Input from "./components/Input";
import TodoList from "./components/TodoList";


function App() { 

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoConatiner">
         <TodoList />
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
