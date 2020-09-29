import * as React from "react";
import "./Hamburger.css";

type HamburgerProps = {};

type HamburgerState = {
  isOpened: boolean;
};

class Hamburger extends React.Component<HamburgerProps, HamburgerState> {
  state: HamburgerState = {
    isOpened: false,
  };

  toggle = () =>
    this.setState((prev: HamburgerState) => ({ isOpened: !prev.isOpened }));

  render() {
    const { isOpened } = this.state;
    const { children } = this.props;

    return (
      <div className={isOpened ? "menu-opened" : "menu"}>
        <div
          className={`hamburger${isOpened ? " hamburger-opened" : ""}`}
          onClick={this.toggle}
        >
          <div className="hamburger-bar hamburger-bar-1"></div>
          <div className="hamburger-bar hamburger-bar-2"></div>
          <div className="hamburger-bar hamburger-bar-3"></div>
        </div>
        {isOpened ? (
          <div className="links" onClick={this.toggle}>
            {children}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Hamburger;
