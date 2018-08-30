import React, { Component } from "react";

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
  }

  addTodo(event) {
    this.state.itemList.push({
      key: this.state.i,
      item: this.state.item
    });

    this.setState({ i: this.state.i + 1 });
    event.target.value = "";
    event.preventDefault();
  }

  render() {
    //object destrucation.
    const { children } = this.props;

    const List = ({ todoList }) => {
      const liNode = todoList.map(item => {
        return (
          <li className="list-group-item liStyle" key={item.key}>
            {item.item}
          </li>
        );
      });
      return <ul className="list-group"> {liNode} </ul>;
    };

    return (
      <div>
        <br />
        {children}
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
