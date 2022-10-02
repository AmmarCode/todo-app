import React from "react";

const TodoList = ({
  activeList,
  todosList,
  handleCheck,
  handleDelete,
  handleClearCompleted,
  handleGetAll,
  handleGetActive,
  handleGetCompleted,
}) => {
  const activeItems = todosList.filter(item => item.checked === false);
  const completedItems = todosList.filter(item => item.checked === true);
  return (
    <div>
      <div className="todos-list-container">        
        {(activeList === 'all' && todosList) ? (
          todosList.map((item, index) => {
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
                      onClick={() => handleDelete(item.id)}
                    />
                  </div>
                )}
              </div>
            );
          })
          ) : (activeList === 'active' && todosList) ? (
            activeItems.map((item, index) => {
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
                        onClick={() => handleDelete(item.id)}
                      />
                    </div>
                  )}
                </div>
              );
            })
          ) : (activeList === 'completed' && todosList) ? (
            completedItems.map((item, index) => {
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
                        onClick={() => handleDelete(item.id)}
                      />
                    </div>
                  )}
                </div>
              );
            })
          ) : null
        }
        <div className="navbar">
          <p className="navbar-item">{todosList.length} items left</p>
          <p className="navbar-item upper all" onClick={handleGetAll}>All</p>
          <p className="navbar-item upper" onClick={handleGetActive}>Active</p>
          <p className="navbar-item upper" onClick={handleGetCompleted}>Completed</p>
          <p className="navbar-item" onClick={handleClearCompleted}>
            Clear Completed
          </p>
        </div>
        <br />
        <div className="lower-navbar">
          <p className="navbar-item lower all" onClick={handleGetAll}>All</p>
          <p className="navbar-item lower" onClick={handleGetActive}>Active</p>
          <p className="navbar-item lower" onClick={handleGetCompleted}>Completed</p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
