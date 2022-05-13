import React, { useEffect, useState } from "react";

const TodoList = ({ todosList, handleChecked, handleDelete }) => {
  useEffect(() => {}, [todosList]);
  return (
    <div>
      <div className="todos-list-container">
        {todosList &&
          todosList.map((item, index) => {
            return (
              <div key={item.id}>
                {index === 0 ? (
                  <div className={`todo-item first-todo-item`}>
                    {item.checked ? (
                      <>
                        <p
                          className="completed"
                          onClick={() => handleChecked(item.id)}
                        >
                          {item.todoItem}
                        </p>
                        <img
                          className="todo-item-check-mark"
                          src="images/icon-check.svg"
                          onClick={() => handleChecked(item.id)}
                        />
                      </>
                    ) : (
                      <>
                        <p onClick={() => handleChecked(item.id)}>
                          {item.todoItem}
                        </p>
                        <span
                          className="todo-item-check-mark-border"
                          onClick={() => handleChecked(item.id)}
                        ></span>
                      </>
                    )}
                    <img
                      className="todo-item-delete-icon"
                      src="images/icon-cross.svg"
                      onClick={() => handleDelete(item.id)}
                    />
                  </div>
                ) : (
                  <div className={`todo-item`}>
                    {item.checked ? (
                      <>
                        <p
                          className="completed"
                          onClick={() => handleChecked(item.id)}
                        >
                          {item.todoItem}
                        </p>
                        <img
                          className="todo-item-check-mark"
                          src="images/icon-check.svg"
                          onClick={() => handleChecked(item.id)}
                        />
                      </>
                    ) : (
                      <>
                        <p onClick={() => handleChecked(item.id)}>
                          {item.todoItem}
                        </p>
                        <span
                          className="todo-item-check-mark-border"
                          onClick={() => handleChecked(item.id)}
                        ></span>
                      </>
                    )}
                    <img
                      className="todo-item-delete-icon"
                      src="images/icon-cross.svg"
                      onClick={() => handleDelete(item.id)}
                    />
                  </div>
                )}
              </div>
            );
          })}
        <div className="navbar">
          <p className="navbar-item">{todosList.length} items left</p>
          <p className="navbar-item upper">All</p>
          <p className="navbar-item upper">Active</p>
          <p className="navbar-item upper">Completed</p>
          <p className="navbar-item">Clear Completed</p>
        </div>
        <br />
        <div className="lower-navbar">
          <p className="navbar-item lower">All</p>
          <p className="navbar-item lower">Active</p>
          <p className="navbar-item lower">Completed</p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
