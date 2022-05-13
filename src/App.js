import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useLocalStorage("todos", []);

  const handleTodoInput = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: new Date().getTime().toString(),
      todoItem: todo,
      checked: false,
    };
    setTodos((todos) => {
      return [...todos, newItem];
    });
    setTodo("");
  };

  const handleChecked = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id && todo.checked === false) {
        return {...todo, checked:true}
      } else if (todo.id === id && todo.checked === true) {
        return {...todo, checked:false}
      } else {
        return todo
      }
    }))
  };

  const handleDelete = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  };

  useEffect(() => {}, [todos, todo]);
  return (
    <div>
      <Header />
      <TodoForm
        todo={todo}
        handleTodoInput={handleTodoInput}
        handleSubmit={handleSubmit}
      />
      <TodoList
        todos={todos}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
