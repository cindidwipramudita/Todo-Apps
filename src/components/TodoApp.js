import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    const completedTodo = todos[index];
    setTodos([...updatedTodos, completedTodo]);
  };

  return (
    <section
      className="vh-100"
      style={{ borderRadius: "0.75rem", backgroundColor: "#A6D0DD" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className="card"
              id="list1"
              style={{ borderRadius: "0.75rem", backgroundColor: "#FFF9DE" }}
            >
              <div className="card-body py-4 px-4 px-md-5">
                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  <i
                    className="fas fa-check-square me-1"
                    style={{
                      color: "#FF6969",
                    }}
                  ></i>
                  <u
                    style={{
                      color: "#FF6969",
                    }}
                  >
                    My Todo-s App
                  </u>
                </p>

                <TodoInput addTodo={addTodo} />

                <hr className="my-4" />

                <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                  <p className="small mb-0 me-2 text-muted">Filter</p>
                  <select className="select">
                    <option value="1">All</option>
                    <option value="2">Completed</option>
                    <option value="3">Active</option>
                    <option value="4">Has due date</option>
                  </select>
                  <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
                  <select className="select">
                    <option value="1">Added date</option>
                    <option value="2">Due date</option>
                  </select>
                  <a
                    href="#!"
                    style={{
                      color: "#FF6969",
                    }}
                    data-mdb-toggle="tooltip"
                    title="Ascending"
                  >
                    <i className="fas fa-sort-amount-down-alt ms-2"></i>
                  </a>
                </div>

                {[
                  ...todos.filter((todo) => !todo.completed),
                  ...todos.filter((todo) => todo.completed),
                ].map((todo, index) => (
                  <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodoApp;
