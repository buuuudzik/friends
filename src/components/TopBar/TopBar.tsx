import * as React from "react";
import "./TopBar.css";
import Menu from "./Menu/Menu";

type TopBarProps = {
  title: string;
  children?: JSX.Element[] | JSX.Element;
};

const TopBar = ({ title, children }: TopBarProps) => (
  <div className="topbar">
    <div className="title">{title}</div>
    {children}
    <Menu />
  </div>
);

export default TopBar;
