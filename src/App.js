import React, { useState } from "react";
import useLocalStorage from "use-local-storage";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import ActiveList from "./components/ActiveList";
import CompletedList from "./components/CompletedList";

function App() {
  const [todoItem, setTodo] = useState("");
  const [todosList, setTodosList] = useLocalStorage("todosList", []);
  const [activeList, setActiveList] = useState("all");

  const handleTodoInput = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: new Date().getTime().toString(),
      todoItem: todoItem,
      checked: false,
    };
    setTodosList((todosList) => {
      return [...todosList, newItem];
    });
    setTodo("");
  };

  const handleCheck = (id) => {
    setTodosList(
      todosList.map((todoItem) => {
        if (todoItem.id === id && todoItem.checked === false) {
          return { ...todoItem, checked: true };
        } else if (todoItem.id === id && todoItem.checked === true) {
          return { ...todoItem, checked: false };
        } else {
          return todoItem;
        }
      })
    );
  };

  const handleDelete = (id) => {
    setTodosList(todosList.filter((item) => item.id !== id));
  };

  const handleClearCompleted = () => {
    setTodosList(todosList.filter((item) => item.checked === false));
  };

  const handleGetAll = () => {
    setActiveList("all");
  };

  const handleGetActive = () => {
    setActiveList("active");
  };

  const handleGetCompleted = () => {
    setActiveList("completed");
  };

  return (
    <div>
      <Header />
      <TodoForm
        todoItem={todoItem}
        handleTodoInput={handleTodoInput}
        handleSubmit={handleSubmit}
      />
      <TodoList
        activeList={activeList}
        todosList={todosList}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <ActiveList
        activeList={activeList}
        todosList={todosList}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <CompletedList
        todosList={todosList}
        activeList={activeList}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Navbar
        todosList={todosList}
        handleGetAll={handleGetAll}
        handleGetActive={handleGetActive}
        handleGetCompleted={handleGetCompleted}
        handleClearCompleted={handleClearCompleted}
      />
    </div>
  );
}

export default App;
