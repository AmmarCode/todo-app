import React from "react";

const ActiveList = ({ todosList, activeList, handleCheck, handleDelete }) => {
  const activeItems = todosList.filter((item) => item.checked === false);

  return (
    <main className="todos-list-container">
      {activeList === "active" && todosList
        ? activeItems.map((item, index) => {
            return (
              <div key={item.id}>
                {index === 0 ? (
                  <div className={`todo-item first-todo-item`}>
                    {item.checked ? (
                      <>
                        <p
                          className="completed"
                          onClick={() => handleCheck(item.id)}
                        >
                          {item.todoItem}
                        </p>
                        <img
                          className="todo-item-check-mark"
                          src="images/icon-check.svg"
                          alt="check-icon"
                          onClick={() => handleCheck(item.id)}
                        />
                      </>
                    ) : (
                      <>
                        <p onClick={() => handleCheck(item.id)}>
                          {item.todoItem}
                        </p>
                        <span
                          className="todo-item-check-mark-border"
                          onClick={() => handleCheck(item.id)}
                        ></span>
                      </>
                    )}
                    <img
                      className="todo-item-delete-icon"
                      src="images/icon-cross.svg"
                      alt="X"
                      onClick={() => handleDelete(item.id)}
                    />
                  </div>
                ) : (
                  <div className={`todo-item`}>
                    {item.checked ? (
                      <>
                        <p
                          className="completed"
                          onClick={() => handleCheck(item.id)}
                        >
                          {item.todoItem}
                        </p>
                        <img
                          className="todo-item-check-mark"
                          src="images/icon-check.svg"
                          alt="check-icon"
                          onClick={() => handleCheck(item.id)}
                        />
                      </>
                    ) : (
                      <>
                        <p onClick={() => handleCheck(item.id)}>
                          {item.todoItem}
                        </p>
                        <span
                          className="todo-item-check-mark-border"
                          onClick={() => handleCheck(item.id)}
                        ></span>
                      </>
                    )}
                    <img
                      className="todo-item-delete-icon"
                      src="images/icon-cross.svg"
                      alt="X"
                      onClick={() => handleDelete(item.id)}
                    />
                  </div>
                )}
              </div>
            );
          })
        : null}
    </main>
  );
};

export default ActiveList;
