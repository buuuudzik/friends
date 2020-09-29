import React from "react";
import "./Menu.css";
import Hamburger from "./Hamburger/Hamburger";
import { Link } from "react-router-dom";

type MyProps = {};

type MyState = {
  isOpened: boolean;
};

class Menu extends React.Component<MyProps, MyState> {
  state: MyState = {
    isOpened: false,
  };

  toggle = () => this.setState((prev) => ({ isOpened: !prev.isOpened }));

  render() {
    const { isOpened } = this.state;

    return isOpened ? (
      <div className="menu-opened">
        <Hamburger isOpened={isOpened} onToggle={this.toggle} />
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About us
        </Link>
      </div>
    ) : (
      <div className="menu">
        <Hamburger isOpened={isOpened} onToggle={this.toggle} />
      </div>
    );
  }
}

export default Menu;
