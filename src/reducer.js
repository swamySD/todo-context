import React, { createContext, useReducer } from 'react';

const initialState = {
  todos: [],
  completedTodos: [],
  starredTodos: [],
  deletedTodos: [],
};

 const TodoContext = createContext(initialState);

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'COMPLETE_TODO':
      const updatedTodos = state.todos.filter(todo => todo.id !== action.payload.id);
      return {
        ...state,
        todos: updatedTodos,
        completedTodos: [...state.completedTodos, action.payload],
      };
    case 'STAR_TODO':
      return {
        ...state,
        starredTodos: [...state.starredTodos, action.payload],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
        deletedTodos: [...state.deletedTodos, action.payload],
      };
    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export {TodoProvider,TodoContext} 