import React from 'react';
import './App.css';
import Todolist from './components/Todolist';
import Todotable from './components/Todotable';

function App() {
  
  return (
    <div className="App">
      <p>Add todo:</p>
      <Todolist />
      <Todotable />
    </div>
  );
}

export default App;
