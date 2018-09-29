import React from "react";

import logo from "../images/logo.svg";
import "./header.css";
// export default Header;
const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2> header here</h2>
    </header>
  );
};
export default Header;
// class Header extends Component {
//   render() {
//     return <div>test on header</div>;
//   }
// }
// export default Header;
// const Header = ({ title }) => (
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className="App-title">{title}</h1>
//   </header>
// );
