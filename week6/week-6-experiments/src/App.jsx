import React,  { useState } from "react"

function App() {
const [title, setTitle] = useState("Lanthoiba1");

function updateTitle(){
  setTitle("My name is "+ Math.random());
}

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="Lanthoiba2"></Header>
      <Header title="Lanthoiba2"></Header>
      <Header title="Lanthoiba2"></Header>
      <Header title="Lanthoiba2"></Header>
      <Header title="Lanthoiba2"></Header>
    </div>
  )
}



const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})


export default App


// import { useState } from "react";

// function App() {
//   return (
//     <div>
//       <HeaderWithButton></HeaderWithButton>
//       <Header title="Lanthoiba2"></Header>
//       <Header title="Lanthoiba2"></Header>
//       <Header title="Lanthoiba2"></Header>
//     </div>
//   );
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState("Lanthoiba1");

//   function updateTitle() {
//     setTitle("My name is " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title}></Header>
//     </div>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// export default App;
