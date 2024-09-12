import React from "react";
import About from "./About";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import { BrowserRouter } from "react-router-dom";
const App=()=>{
  return 
    <>
    <Routes>
      <Route path="/" element={About}/>
    </Routes>
    
    
  
    
  </>

};
export default App;



























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
