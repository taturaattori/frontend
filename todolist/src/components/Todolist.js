import React, {useState} from 'react';


export default function Todolist() {

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
    setTodos((todos) => (todos).filter((_, i) => i !== index))
  }

return(
    <div>
    <form onSubmit={addTodo}>
      <label>Date:</label>
      <input type="date" name="date" value={todo.date} onChange={inputChanged}/>
      <label>Description:</label>
      <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
      <input type="submit" value="Add"/>
     </form>
    </div>
);
}