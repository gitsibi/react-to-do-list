/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
function App() {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState('');
  const changeItem = (e) => {setItem(e.target.value);};
  const addItemToList = () => {setTodos([...todos, item]);setItem('');};
  const editItem = (index, e) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = e.target.value;
    setTodos(updatedTodos);
  };
  const deleteItem = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className='container'>
      <div>
        <input className='TextBox' type='text' placeholder='Type here' value={item} onChange={(e) => changeItem(e)}/>
        <button type='submit' onClick={addItemToList}>Add Item</button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <input type='text' className='AddText' value={todo} onChange={(e) => editItem(index, e)}/>
            <button type='submit' onClick={() => deleteItem(index)}>Delete</button>
          </div>
          ))}
      </div>
    </div>
  );
}
export default App;