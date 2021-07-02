import axios from "axios";
import React from "react";
import BasicUser from "../Users/BasicUser";
import styles from "./Pagination.module.scss";
import Select from "./Select";
import Input from "./Input";
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentPage: 1,
      todosPerPage: 5,
      pages: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
    window.scrollTo(0, 0);
  }
  componentDidMount() {
    axios.get("http://localhost:3001/list/user").then((data) => {
      this.setState({ todos: data.data });
      this.setState({ pages: data.data });
    });
  }
  changePageHandler = (data) => {
    this.setState({ todosPerPage: data });
  };
  changeUserHandler = (event) => {
    const newUser = this.state.todos.filter((items) => {
      return items.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    this.setState({ pages: newUser });
  };
  deleteUserHandler = (id) => {
    const newListUser = this.state.pages.filter((user) => {
      return user.id !== id;
    });
    this.setState({ pages: newListUser });
  };
  render() {
    const { pages, currentPage, todosPerPage } = this.state;
    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = pages.slice(indexOfFirstTodo, indexOfLastTodo);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pages.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div>
        <Input
          input={{
            type: "search",
            placeholder: "Search...",
            onChange: this.changeUserHandler,
          }}
        />
          <ul className={styles.user}>
            <BasicUser
              users={currentTodos}
              setUserHandler={this.deleteUserHandler}
            />
          </ul>
          <ul className={styles.pagination}>
            <Select onChangeUser={this.changePageHandler} />
            {renderPageNumbers}
          </ul>
      </div>
    );
  }
}

export default TodoApp;
