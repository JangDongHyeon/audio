import React from "react";
import "./Header.css";
class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="gnb">
          <button id="logo">
            <img src="http://www.neoali.com/img/logo_update.png" alt="logo" />
          </button>
          <ul id="menu-list">
            <li className="menu-item">Talker</li>
            <li className="menu-item">Summary</li>
            <li className="menu-item">Chatbot</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
