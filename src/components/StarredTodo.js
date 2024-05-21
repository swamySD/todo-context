import React, { useContext } from 'react';
import { TodoContext } from '../reducer';

const StarredTodos = () => {
  const { state } = useContext(TodoContext);
  const starredTodos = state.starredTodos;

  return (
    <div>
      <h2>Starred Todos</h2>
      <ul>
        {starredTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default StarredTodos;
