import React from 'react';

function TodoItem({ todo, deleteTodo, toggleTodo }) {

  return (
    <li>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed
            ? 'line-through'
            : 'none'
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;