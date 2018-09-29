import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import "./index.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello React_TDD_todo1</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
