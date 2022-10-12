import React, { useState } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from 'react';

function App() {
  const [todo, setTodo] = useState({desc: '', date: '', priority: ''});
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(todos.filter((todo, index) =>
        index !== gridRef.current.getSelectedNodes()[0].childIndex))
    } else {
      alert("Select row first");
    }
    
  }

  const columns = [
    {headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: true},
    {headerName: 'Description', field: 'desc', sortable: true, filter: true, floatingFilter: true},
    {headerName: 'Priority', field: 'priority', sortable: true, filter: true, floatingFilter: true,
    cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}},
  ]

  return (
    <div className="App">
      <input type="date" name="date" value={todo.date} onChange={inputChanged} />
      <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
      <input type="text" name="priority" value={todo.priority} onChange={inputChanged} />
      <button onClick={addTodo}>Add</button>
      <button onClick={deleteTodo}>Delete</button>

      <div
        className="ag-theme-material"
        style={{
          height: '700px',
          width: '50%',
          margin: 'auto'}}
        >
          <AgGridReact
            animateRows="true"
            ref={gridRef}
            onGridReady={params => gridRef.current = params.api}
            rowSelection="single"
            columnDefs={columns}
            rowData={todos}
          >
          </AgGridReact>
      </div>

    </div>
  );
}

export default App;