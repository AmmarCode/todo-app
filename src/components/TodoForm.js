import React, { useState } from "react";

const TodoForm = ({ todo, handleTodoInput, handleSubmit }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <div className="todo-form-container">
      <form onSubmit={handleSubmit}>
        <input
          className="todo-form"
          type="text"
          name="todo"
          placeholder="Create a new todo..."
          autoComplete="off"
          onChange={handleTodoInput}
          value={todo}
          maxLength="40"
        />
        {checked ? (
          <img
            className="todo-item-check-mark"
            src="images/icon-check.svg"
            onClick={handleChecked}
          />
        ) : (
          <span
            className="todo-item-check-mark-border"
            onClick={handleChecked}
          ></span>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
