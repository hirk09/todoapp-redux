import React from "react";
import { connect } from "react-redux";
import { getTodo, addTodo } from "./action/addTodo";

class App extends React.PureComponent {
  state = {
    inputValue: "",
    data: [],
    onclick: false,
  };
  componentWillMount() {
    this.props.getTodoRequest();
  }
  changeSubmit = (e) => {
    this.setState({ inputValue: "" });
    this.props.addTodoRequest();
    let id = this.props.getTodo.data.length;
    let newData = [
      ...this.props.getTodo.data,
      ...[
        {
          id: id,
          name: this.state.inputValue,
          checked: false,
        },
      ],
    ];
    this.props.addTodoRequest(newData);
    e.preventDefault();
    if (this.state.inputValue === "") {
      this.setState({ onclick: false });
    } else {
      this.setState({ onclick: true });
    }
  };
  changeInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  changeCheckbox = (event) => {
    let checkValue = event.target.name;
    let data = this.props.getTodo.data.map((val) => {
      if (val.name === checkValue) {
        val.checked = !val.checked;
      }
      return val;
    });
    this.setState({ data: data });
  };
  render() {
    if (!this.props.getTodo.data) return null;
    return (
      <div>
        <h4>User List</h4>
        <ul>
          {this.props.getTodo.data.map((val, key) => {
            return (
              <li key={key}>
                <input
                  checked={val.checked}
                  type="checkbox"
                  id={val.id}
                  value={val.checked}
                  name={val.name}
                  onChange={this.changeCheckbox}
                />
                <span>{val.name}</span>
                {val.checked ? <span> Completed</span> : null}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          placeholder="Please enter a task..."
          value={this.state.inputValue}
          onChange={this.changeInput}
        ></input>
        <br />
        <button type="submit" onClick={this.changeSubmit}>
          Add List
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { getTodo: state.getTodo, addTodo: state.inputValue };
};

const mapDispatchToProps = (dispatch) => ({
  getTodoRequest: () => dispatch(getTodo()),
  addTodoRequest: (data) => dispatch(addTodo(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);