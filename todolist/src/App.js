import React, {useState} from 'react';
import './App.css';
//import Todotable from './components/Todolist';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''})
  const [todos, setTodos] = useState([])

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const deleteItem = (index) => () => {
    setTodos((todos) => todos.filter((_, i) => i !== index))
  }
  
  return (
    <div className="App">
     <form onSubmit={addTodo}>
      <label>Date:</label>
      <input type="date" name="date" value={todo.date} onChange={inputChanged}/>
      <label>Description:</label>
      <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
      <input type="submit" value="Add"/>
     </form>
     <table>
                <tbody>
                    <tr><th>Date</th><th>Description</th></tr>
                    {todos.map((todo, index) =>
                    <tr key={todo.desc}>
                    <td>{todo.date}</td>
                    <td>{todo.desc}</td>
                    <td><button onClick={deleteItem(index)}>Delete</button></td>
                    </tr>
                    )}
                </tbody>
            </table>
    </div>
  );
}

export default App;
