import React, { useContext } from 'react';
import { TodoContext } from '../reducer';

const CompletedTodos = () => {
  const { state } = useContext(TodoContext);
  const completedTodos = state.completedTodos;

  return (
    <div>
      <h2>Completed Todos</h2>
      <ul>
        {completedTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTodos;
