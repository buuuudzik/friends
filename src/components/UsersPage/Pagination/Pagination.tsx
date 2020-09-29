import * as React from "react";
import "./Pagination.css";
import { Link } from "react-router-dom";

type PaginationProps = {
  currentPage: number;
  pages: number;
};

const createArray = (length: number) => new Array(length).fill(1);

const Pagination = ({ currentPage, pages }: PaginationProps) => {
  return (
    <div className={"pagination"}>
      {createArray(pages).map((_, i) => (
        <div
          key={i}
          className={`pagination-page${
            currentPage === i ? " current-page" : ""
          }`}
        >
          <Link to={`/${i + 1}`}>{i + 1}</Link>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
