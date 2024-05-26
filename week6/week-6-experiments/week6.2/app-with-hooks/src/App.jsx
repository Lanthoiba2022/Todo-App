import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";

// function App() {
//   const [todos, setTodos] = useState([]);


//   // useEffect(() => {
//   //     fetch("https://sum-server.100xdevs.com/todos")
//   //       .then(async function(res){
//   //           const json = await res.json();
//   //           setTodos(json.todos);

//   //       })
//   // }, []);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(function (response){
//         setTodos(response.data.todos)
//       })
//   }, []);

//   return (
//     <div>
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
//     </div>
//   )
// }

// function Todo({title, description}){
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h5>
//       {description}
//     </h5>
//   </div>
// }

// export default App

function App() {
  const [Id, setId] = useState(1);

  return <div>
    <button onClick={function(){
      setId(1);
    }}>1</button>
    <button onClick={function(){
      setId(2);
    }}>2</button>
    <button onClick={function(){
      setId(3);
    }}>3</button>
    <button onClick={function(){
      setId(4);
    }}>4</button>
    <button onClick={function(){
      setId(5);
    }}>5</button>
    
    <Todo id={Id} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect( () => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then( respose => {
          setTodo(respose.data.todo)
      })
  }, [id])
  return <div>
    Id: {id}
    <h1>
      {todo.title}
    </h1>
    <h5>
      {todo.description}
    </h5>
  </div>
}

export default App;