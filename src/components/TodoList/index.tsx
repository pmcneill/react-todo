/// <reference path="../../interfaces.d.ts"/>

import React from 'react';

interface ListProps {
  todos: ITodo[],
};

interface ItemProps {
  todo: ITodo,
}

const TodoItem : React.FC<ItemProps> = function( { todo } ) {
  return <li>{todo.message}</li>
};

const TodoList : React.FC<ListProps> = function({ todos }) {
  return (
    <ul>
      { todos.map((todo, index) => <TodoItem todo={todo} key={index} />) }
    </ul>
  );
};

export default TodoList;
