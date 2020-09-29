import React from "react";
import "./Menu.css";
import Hamburger from "./Hamburger/Hamburger";

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
        <div className="link">
          <a href="/">Home</a>
        </div>
        <div className="link">
          <a href="/about">About us</a>
        </div>
      </div>
    ) : (
      <div className="menu">
        <Hamburger isOpened={isOpened} onToggle={this.toggle} />
      </div>
    );
  }
}

export default Menu;
