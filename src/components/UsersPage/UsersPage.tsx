import React from "react";
import "./UsersPage.css";
import Users, { User } from "./Users/Users";
import TopBar from "../TopBar/TopBar";
import Search from "./Search/Search";
import Pagination from "./Pagination/Pagination";

type MyProps = {
  pageIndex: any;
};

type MyState = {
  items: User[];
  itemsPerPage: number;
  search: string;
  loading: boolean;
  loadingError: boolean;
};

class UsersPage extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      items: [],
      itemsPerPage: 5,
      search: "",
      loading: true,
      loadingError: false,
    };
  }

  fetchTodos = () => {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.json())
      .then((res) => {
        type Item = {
          id: number;
          employee_name: string;
        };

        const users = res.data.map(({ id, employee_name }: Item) => ({
          id,
          name: employee_name,
        }));

        users.length = 17;

        this.setState({
          items: users,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ items: [], loading: false, loadingError: true });
      });
  };

  componentDidMount() {
    this.fetchTodos();
  }

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value });
  };

  getFilteredItems = () => {
    let { search, items } = this.state;

    if (search.trim() === "") return items;

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

    const filterItem = (item: User) => {
      return escapeString(item.name.toLowerCase()).match(search);
    };

    return items.filter(filterItem);
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
    const { search, itemsPerPage, loading, loadingError } = this.state;

    if (loading) {
      return <div className="loading">Loading...</div>;
    }

    if (loadingError) {
      return <div className="loading-error">Loading error!!!</div>;
    }

    const currentPageIndex = this.correctPageIndex(this.props.pageIndex);
    const filteredItems = this.getFilteredItems();
    const currentPageUsers = this.getCurrentPageItems(currentPageIndex);

    return (
      <main>
        <TopBar title={"Friends"}>
          <Search value={search} onChange={this.handleSearchChange} />
        </TopBar>
        <Users items={currentPageUsers} />
        <Pagination
          currentPage={currentPageIndex - 1}
          pages={Math.ceil(filteredItems.length / itemsPerPage)}
        />
      </main>
    );
  }
}

export default UsersPage;
