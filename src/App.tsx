import React from "react";
import "./App.css";
import About from "./components/AboutPage/AboutPage";
import UsersPage from "./components/UsersPage/UsersPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

type AppProps = {};

type AppState = {
  users: [];
  loading: boolean;
  loadingError: boolean;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      users: [],
      loading: true,
      loadingError: false,
    };
  }

  fetchUsers = () => {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.json())
      .then((res) => {
        type Employer = {
          id: number;
          employee_name: string;
        };

        const users = res.data.map(({ id, employee_name }: Employer) => ({
          id,
          name: employee_name,
        }));

        users.length = 17;

        this.setState({
          users,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ users: [], loading: false, loadingError: true });
      });
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { users, loading, loadingError } = this.state;

    if (loading) {
      return <div className="loading">Loading...</div>;
    }

    if (loadingError) {
      return <div className="loading-error">Loading error!!!</div>;
    }

    return (
      <Router basename="/friends">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route
            path="/:index"
            render={(props) => {
              const index = parseInt(props?.match?.params?.index);
              return (
                <UsersPage pageIndex={isNaN(index) ? 1 : index} users={users} />
              );
            }}
          />
          <Route path="/">
            <UsersPage pageIndex={1} users={users} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
