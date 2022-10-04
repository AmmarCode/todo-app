import React, { useState } from "react";

const TodoForm = ({ todoItem, handleTodoInput, handleSubmit }) => {
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
          value={todoItem}
          maxLength="100"
          required={true}
        />
        <span
          className="todo-item-check-mark-border"
          onClick={handleChecked}
        ></span>
      </form>
    </div>
  );
};

export default TodoForm;
