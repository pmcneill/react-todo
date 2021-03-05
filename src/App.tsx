/// <reference path="./interfaces.d.ts" />

import React, { useState } from 'react';

import TodoList from './components/TodoList';
import AddToList from './components/AddToList';

function App() {
  let [ todos, setTodos ] = useState<ITodo[]>([
    { message: 'Test todo app', completed: false },
    { message: 'Another test', completed: true },
  ]);

  const addNewTodo = function(todo: ITodo) {
    setTodos((existing) => {
      return existing.concat(todo);
    });
  };

  return (
    <div className="App">
      <TodoList todos={todos}/>

      <AddToList onSave={addNewTodo}/>
    </div>
  );
}

export default App;
