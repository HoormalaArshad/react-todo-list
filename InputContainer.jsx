import React from 'react';

function InputContainer({ inputVal, writeTodo, addTodo }) {
  return (
    <div className="input-container">
      <input type="text" value={inputVal} onChange={writeTodo} placeholder="Add a task..." />
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default InputContainer;
