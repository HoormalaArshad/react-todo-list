import React from 'react';
import Todo from './Todo';

function TodoContainer({ todo, deleteTodo }) {
  return (
    <div className="container">
      {todo.map((item, index) => (
        <Todo key={index} todo={item} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoContainer;
