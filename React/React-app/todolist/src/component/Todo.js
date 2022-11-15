import React from "react";
export class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],// value will be obj [{task : "make todo app" , id : 1}]
      currTask: "",
    };

  }
  handleChange = (e) => {
    // using target property :
    this.setState({
      currTask: e.target.value,
    });
  }
  handleAddTask = () => {

    this.setState({

      tasks: [...this.state.tasks, { task: this.state.currTask, id: this.state.tasks.length + 1 }],
      currTask: " "
    })

  }

  handleDelete = (id) => {
    let newArr = this.state.tasks.filter((myVal) => {
      return myVal.id != id
    })

    this.setState({
      tasks: [...newArr]
    })
  }

  render() {

    return (
      <div>
         
        <input type="text" placeholder="Add your task" value={this.state.currTask} onChange={this.handleChange} />
        <button onClick={this.handleAddTask}> Add-Task </button>

        <ol>
          {this.state.tasks.map((taskObj) => {
            // instead of () =>{} , use ()=>() beacsue it will direct return values with jsx else use return keyword with li
            // ()=> this.handleDelete(taskObj.id here we useing extraa arrow function becasue handleDelete(taskObj.id) is open function call. so we need when delete btn clicked then delete function call ocuures . so here we adding delete function inside arrow function .. if click will ocures then arrow function will call and inside of that delete function calls
            return (
              <li>
                <p>{taskObj.task}</p>
                <button onClick={() => this.handleDelete(taskObj.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
export default Todo;
