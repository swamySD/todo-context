import React, { useState, useContext } from 'react';

import { TodoContext,TodoProvider} from './reducer';
import DeletedTodo from './components/DeletedTodo';
import CompletedTodo from './components/CompletedTodo';
import StarredTodo from './components/StarredTodo';
import CompletedTodos from './components/CompletedTodo';
import DeletedTodos from './components/DeletedTodo';
import StarredTodos from './components/StarredTodo';

const App = () => {
  const {state, dispatch } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    const todo = { id: Date.now(), text: newTodo };
    dispatch({ type: 'ADD_TODO', payload: todo });
    setNewTodo('');
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <div>
        <h2>All Todos</h2>
        <ul>
          {state && state.todos.map(todo => (
            <li key={todo.id}>
              {todo.text} - <button onClick={() => dispatch({ type: 'COMPLETE_TODO', payload: todo })}>Complete</button>
              <button onClick={() => dispatch({ type: 'STAR_TODO', payload: todo })}>Star</button>
              <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo })}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <DeletedTodos/>
      <CompletedTodos/>
      <StarredTodos/>
      {/* You can create similar components for these tabs */}
    </div>
  );
};

export default App;
