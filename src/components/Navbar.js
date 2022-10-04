import React from "react";

const Navbar = ({
  todosList,
  handleGetAll,
  handleGetActive,
  handleGetCompleted,
  handleClearCompleted,
}) => {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <p className="navbar-item">{todosList.length} items left</p>
        <p className="navbar-item upper all" onClick={handleGetAll}>
          All
        </p>
        <p className="navbar-item upper" onClick={handleGetActive}>
          Active
        </p>
        <p className="navbar-item upper" onClick={handleGetCompleted}>
          Completed
        </p>
        <p className="navbar-item" onClick={handleClearCompleted}>
          Clear Completed
        </p>
      </div>
      <br />
      <div className="lower-navbar">
        <p className="navbar-item lower all" onClick={handleGetAll}>
          All
        </p>
        <p className="navbar-item lower" onClick={handleGetActive}>
          Active
        </p>
        <p className="navbar-item lower" onClick={handleGetCompleted}>
          Completed
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
