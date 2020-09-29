import * as React from "react";
import "./TopBar.css";
import Hamburger from "./Hamburger/Hamburger";
import { Link } from "react-router-dom";

type TopBarProps = {
  title: string;
  children?: JSX.Element[] | JSX.Element;
};

const TopBar = ({ title, children }: TopBarProps) => (
  <div className="topbar">
    <div className="title">{title}</div>
    {children}
    <Hamburger>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About us
      </Link>
    </Hamburger>
  </div>
);

export default TopBar;
