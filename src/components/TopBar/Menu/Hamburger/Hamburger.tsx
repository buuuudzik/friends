import * as React from "react";
import "./Hamburger.css";

type HamburgerProps = {
  isOpened: boolean;
  onToggle: Function;
};

const Hamburger = ({ isOpened, onToggle }: HamburgerProps) => {
  return (
    <div
      className={`hamburger${isOpened ? " hamburger-opened" : ""}`}
      onClick={() => onToggle()}
    >
      <div className="hamburger-bar hamburger-bar-1"></div>
      <div className="hamburger-bar hamburger-bar-2"></div>
      <div className="hamburger-bar hamburger-bar-3"></div>
    </div>
  );
};

export default Hamburger;
