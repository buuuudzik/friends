import * as React from "react";
import "./Pagination.css";
import { Link } from "react-router-dom";

type PaginationProps = {
  currentPage: number;
  pages: number;
};

const createArray = (length: number) => {
  const elements = [];
  for (let i = 0; i < length; i++) elements.push({ id: i, value: i + 1 });
  return elements;
};

const Pagination = ({ currentPage, pages }: PaginationProps) => {
  const elements = pages > 1 ? createArray(pages) : [];

  return (
    <div className={"pagination"}>
      {elements.map(({ id, value }) => (
        <div
          key={id}
          className={`pagination-page${
            currentPage === id ? " current-page" : ""
          }`}
        >
          <Link to={`/${value}`}>{value}</Link>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
