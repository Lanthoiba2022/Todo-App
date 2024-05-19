import { useState } from "react";


function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 9-10",
    completed: false
  },
    {
      title: "Study DSA",
      description: "Study DSA from 10 - 11",
      completed: true
    }
]);

function addTodo(){
  setTodos([...todos, {
    title: "new Todo",
    description: "desc of new todo"
  }])
}


  return (
    <div>
      {/* <Todo title={todos[0].title} description={todos[0].description} ></Todo>
      <Todo title={todos[1].title} description={todos[1].description}></Todo> */}

      <button onClick={addTodo}> Add a random todo </button>

      {todos.map(function(todo) {
      return <Todo title={todo.title} description={todo.description}></Todo>
    })}
    </div>
  )
}


  function Todo(props){
    return <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  }
    


export default App
