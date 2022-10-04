import React from "react";

const CompletedList = ({
  activeList,
  todosList,
  handleCheck,
  handleDelete,
}) => {
  const completedItems = todosList.filter((item) => item.checked === true);

  return (
    <div className="todos-list-container">
      {activeList === "completed" && todosList
        ? completedItems.map((item, index) => {
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
    </div>
  );
};

export default CompletedList;
