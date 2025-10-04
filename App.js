import { useState } from 'react';
import './App.css'; 

import InputContainer from './components/InputContainer';
import TodoContainer from './components/TodoContainer';

function App() {
  const [inputVal, setInputVal] = useState('');
  const [todo, setTodo] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal.trim() !== '') {
      setTodo((prevTodo) => [...prevTodo, inputVal]);
      setInputVal('');
    }
  }

  function deleteTodo(index) {
    setTodo((prevTodo) => prevTodo.filter((_, i) => i !== index));
  }

  return (
    <main>
      <h1>📝 To Do List</h1>
      <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
      <TodoContainer todo={todo} deleteTodo={deleteTodo} />
    </main>
  );
}

export default App;
