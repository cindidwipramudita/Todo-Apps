import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      addTodo(newTodoText);
      setNewTodoText("");
    }
  };

  return (
    <div className="pb-2">
      <div className="card">
        <div className="card-body">
          <div className="d-flex flex-row align-items-center">
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Add new..."
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
            />

            <div>
              <button
                type="button"
                className="btn btn-add btn-primary "
                onClick={handleAddTodo}
                style={{
                  backgroundColor: "#FF6969",
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
