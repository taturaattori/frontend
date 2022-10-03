import React from 'react';

export default function Todolist(props) {

    return(
        <div>
            <table>
                <tbody>
                    <tr><th>Date</th><th>Description</th></tr>
                    {props.todos.map((todo, index) =>
                    <tr key={todo.desc}>
                    <td>{todo.date}</td>
                    <td>{todo.desc}</td>
                    <td><button onClick={props.handleDelete}>Delete</button></td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}