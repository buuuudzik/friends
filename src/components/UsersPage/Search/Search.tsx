import * as React from "react";
import "./Search.css";

type SearchProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ value, onChange }: SearchProps) => (
  <div className="search">
    <input value={value} onChange={onChange} />
  </div>
);

export default Search;
