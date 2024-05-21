import React, { useContext } from 'react';
import { TodoContext } from '../reducer';

const DeletedTodos = () => {
  const { state } = useContext(TodoContext);
  const deletedTodos = state.deletedTodos;

  return (
    <div>
      <h2>Deleted Todos</h2>
      <ul>
        {deletedTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeletedTodos;
