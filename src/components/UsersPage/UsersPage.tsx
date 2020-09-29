import React from "react";
import "./UsersPage.css";
import Users, { User } from "./Users/Users";
import TopBar from "../TopBar/TopBar";
import Search from "./Search/Search";
import Pagination from "./Pagination/Pagination";

type MyProps = {
  pageIndex: number;
  users: User[];
};

type MyState = {
  itemsPerPage: number;
  search: string;
};

class UsersPage extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      itemsPerPage: 5,
      search: "",
    };
  }

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value });
  };

  getFilteredItems = () => {
    let { search } = this.state;
    let { users } = this.props;

    if (search.trim() === "") return users;

    const specials = [
      "/",
      ".",
      "*",
      "+",
      "?",
      "|",
      "(",
      ")",
      "[",
      "]",
      "{",
      "}",
      "\\",
    ];

    const escapeString = (s: string) => {
      return s
        .split("")
        .map((char) => (specials.includes(char) ? `\${char}` : char))
        .join("");
    };

    search = escapeString(search.toLowerCase());

    const filterItem = (user: User) => {
      return escapeString(user.name.toLowerCase()).match(search);
    };

    return users.filter(filterItem);
  };

  correctPageIndex = (pageIndex: number) => {
    const { itemsPerPage } = this.state;
    const filteredItems = this.getFilteredItems();
    const availablePages = Math.ceil(filteredItems.length / itemsPerPage);
    if (pageIndex > availablePages) pageIndex = availablePages;
    else if (!(pageIndex > 0)) pageIndex = 1;
    return pageIndex;
  };

  getCurrentPageItems = (pageIndex: number) => {
    const { itemsPerPage } = this.state;
    const filteredItems = this.getFilteredItems();
    const startIndex = (pageIndex - 1) * itemsPerPage;
    return filteredItems.slice(startIndex, startIndex + itemsPerPage);
  };

  render() {
    const { search, itemsPerPage } = this.state;

    const currentPageIndex = this.correctPageIndex(this.props.pageIndex);
    const filteredItems = this.getFilteredItems();
    const currentPageUsers = this.getCurrentPageItems(currentPageIndex);

    return (
      <main>
        <TopBar title={"Friends"}>
          <Search value={search} onChange={this.handleSearchChange} />
        </TopBar>
        <Users users={currentPageUsers} />
        <Pagination
          currentPage={currentPageIndex - 1}
          pages={Math.ceil(filteredItems.length / itemsPerPage)}
        />
      </main>
    );
  }
}

export default UsersPage;
