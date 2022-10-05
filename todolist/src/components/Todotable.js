import React from 'react';
import Todolist from './Todolist';

export default function Todotable(props) {

    return (
    <div>
    <table>
        <tbody>
            <tr><th>Date</th><th>Description</th></tr>
            {this.props.todos.map((todo, index) =>
            <tr key={todo.desc}>
            <td>{todo.date}</td>
            <td>{todo.desc}</td>
            <td><button onClick={props.deleteItem(index)}>Delete</button></td>
            </tr>
            )}
        </tbody>
    </table>
    </div>
    );
}