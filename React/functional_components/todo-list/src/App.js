import React, { useState } from "react";
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const newTodoSubmit = (e) => {
    e.preventDefault();
    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    };

    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const todoDelete = (delIdx) => {
      const filteredTodos = todos.filter((todo, i) => {
        return i !== delIdx;
      });
      setTodos(filteredTodos);
  }

  const toggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = ! todo.complete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div>
      <form onSubmit={(event) => {
        newTodoSubmit(event);
      }}>
        <input 
          onChange={ (event) => {
            setNewTodo(event.target.value);
          }}
          type="text"
          value={newTodo} 
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      < hr />

      {todos.map((todo,i ) => {
        const todoClasses = [];

        if (todo.complete) {
          todoClasses.push("text-decoration");
        }

        return (
          <div key={i}>
            <input onChange={(event) => {
              toggleComplete(i);
            }} checked={todo.complete} type="checkbox" />
            <span className={todoClasses.join(" ")} >{todo.text}</span>
            <button 
              onClick={(event)=> {
                todoDelete(i);
              }}
              style={{ marginLeft : "10px" }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

//if it can change put it in state

export default App;
