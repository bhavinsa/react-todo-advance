import React, { Component } from "react";
const $ = window.$;

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name);
    this.state = {
      name: this.props.name,
      item: "",
      itemList: []
    };
  }

  addTodo(event) {
    if (this.refs.todoref.value != "") {
      let itemList = this.state.itemList;
      itemList.push({
        key: new Date().valueOf(),
        item: this.refs.todoref.value
      });
      $("#todo").val("");
      this.refs.todoref.value = "";
      this.setState({ itemList: itemList });
    } else {
      alert("Please enter todo.");
    }
    event.preventDefault();
  }

  removeTodo(id) {
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
                onClick={this.removeTodo.bind(this, item.key)}
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
        <div className="p-3 mb-2 bg-primary text-white">Home page!!</div>
        <br />

        {/* render the Component passed html here */}
        {children}

        {/* How to use parent prop variable */}
        {/* <div>{this.state.name}</div> */}
        <br />
        <input
          type="button"
          value="call parent event"
          className="btn btn-primary"
          onClick={this.props.onChildCall}
        />
        <br />
        <form onSubmit={this.addTodo.bind(this)}>
          <br />
          <div className="input-group input-group-sm">
            <input
              className="form-control"
              type="text"
              name="todo"
              id="todo"
              ref="todoref"
              // onChange={event => this.setState({ item: event.target.value })}
            />
            <input
              className="form-control"
              type="button"
              value="Add"
              className="btn btn-primary"
              onClick={this.addTodo.bind(this)}
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
