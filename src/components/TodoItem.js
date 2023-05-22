import React from "react";

function TodoItem({ todo, index, deleteTodo, toggleComplete }) {
  const itemClass = todo.completed
    ? "list-group-item checked"
    : "list-group-item";

  return (
    <ul className="list-group list-group-horizontal rounded-0" key={index}>
      <li
        className={`${itemClass} px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent`}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            toggleComplete(index);

            todo.completed = !todo.completed;
          }}
        />
        <p className="lead fw-normal mb-0">{todo.text}</p>
      </li>
      <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
        <div className="d-flex flex-row justify-content-end mb-1">
          <a
            href="#!"
            className="text-danger"
            data-mdb-toggle="tooltip"
            title="Delete todo"
            onClick={() => deleteTodo(index)}
          >
            <i className="fas fa-trash-alt"></i>
          </a>
        </div>
      </li>
    </ul>
  );
}

export default TodoItem;
