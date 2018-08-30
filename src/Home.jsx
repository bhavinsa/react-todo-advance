import React, { Component } from "react";
const $ = window.$;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.value.name,
      item: "This is list item",
      itemList: [],
      i: 1
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(event) {
    this.state.itemList.push({
      key: this.state.i,
      item: this.state.item
    });
    $("#todo").val("");
    this.setState({ i: this.state.i + 1 });
    event.preventDefault();
  }

  removeTodo(event) {
    const id = event.target.id;
    const remainder = this.state.itemList.filter(todo => {
      if (todo.key != id) {
        return true;
      }
    });
    this.setState({ itemList: remainder });
  }

  render() {
    //object destrucation.
    const { children } = this.props;

    const List = ({ todoList }) => {
      const liNode = todoList.map(item => {
        return (
          <li className="list-group-item liStyle" key={item.key}>
            {item.item}
            <button type="button" className="close" aria-label="Close">
              <span
                id={item.key}
                value={item.key}
                onClick={this.removeTodo}
                aria-hidden="true"
              >
                &times;
              </span>
            </button>
          </li>
        );
      });
      return <ul className="list-group"> {liNode} </ul>;
    };

    return (
      <div>
        <br />

        {/* render the Component passed html here */}
        {children}

        {/* How to use parent prop variable */}
        <div>{this.state.name}</div>
        <br />
        <input
          type="button"
          value="call parent event"
          className="btn btn-primary"
          onClick={this.props.onChildCall}
        />
        <br />
        <form onSubmit={this.addTodo}>
          <br />
          <div className="input-group input-group-sm">
            <input
              className="form-control"
              type="text"
              name="todo"
              id="todo"
              onChange={event => this.setState({ item: event.target.value })}
            />
            <input
              className="form-control"
              type="button"
              value="Add"
              className="btn btn-primary"
              onClick={this.addTodo}
            />
          </div>
        </form>
        <br />
        <List todoList={this.state.itemList} />
      </div>
    );
  }
}
export default Home;
