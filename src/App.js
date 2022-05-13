import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoItem, setTodo] = useState("");
  const [todosList, setTodosList] = useLocalStorage("todosList", []);

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

  const handleChecked = (id) => {
    setTodosList(todosList.map(todoItem => {
      if(todoItem.id === id && todoItem.checked === false) {
        return {...todoItem, checked:true}
      } else if (todoItem.id === id && todoItem.checked === true) {
        return {...todoItem, checked:false}
      } else {
        return todoItem
      }
    }))
  };

  const handleDelete = (id) => {
    setTodosList(
      todosList.filter((todoItem) => todoItem.id !== id)
    );
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
        todosList={todosList}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
