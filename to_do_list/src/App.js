import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, SetInput] = useState("");

  const addToDO = () => {
    if (input === "") {
      alert("Empty input");
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: input,
      complete: false,
    };
    setTodos([...todos, newTodo]);

    SetInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTod = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };

  return (
    <div className="App">
      <h1>To Do List</h1>

      <div className="main-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addToDO();
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => SetInput(e.target.value)}
            placeholder="add todo....."
          />

          <button type="submit"> Add+ </button>
          {todos.map((todo) => (
            <div key={todo.id}>
              {todo.text}
              <span onClick={() => deleteTodo(todo.id)}>❌</span>

              <span 
                onClick={()=>{
                  const newText = prompt("edit todo",todo.text)
                  if(newText) editTod(todo.id,newText);
                }}
              >✎</span>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default App;
