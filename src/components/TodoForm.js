import React, { useState } from "react";

const TodoForm = () => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <form>
        <input
          className="todo-form"
          type="text"
          name="todo"
          placeholder="Create a new todo..."
          autoComplete="off"
        />
        {checked ? (
          <img className="todo-check" src="images/icon-check.svg" onClick={handleChecked} />
        ) : (
          <span className="check-circle" onClick={handleChecked}></span>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
