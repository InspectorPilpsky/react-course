import { Component } from "react";
import AppHeader from "../app-header"
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter"
import SearchPanel from "../search-panel"
import TodoList from "../todo-list"


import './app.css';

export default class App extends Component {

  maxId = 0;

  state = {
    todoData: [
      this.createTodoItem('Learn React'),
      this.createTodoItem('Build Awesome App'),
      this.createTodoItem('Drink Coffee'),
    ]
  }

  createTodoItem(label) {
    // let max = {id:0};
    // if(this.state) max = this.state.todoData.reduce((acc, item) => item.id > acc.id ? item : acc);
    return ({ id: this.maxId++, label, important: false, done: false })
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => ({ todoData: todoData.filter((item) => item.id !== id) }))
  }

  addItem = (label) => {
    this.setState(({ todoData }) => ({ todoData: [...todoData, this.createTodoItem(label)] }))
  }

  toggleProp = (arr, id, prop) => {
    const idx = arr.findIndex(e => e.id === id)
    const oldItem = arr[idx]
    const toggled = { ...oldItem, [prop]: !oldItem[prop] }
    return ([...arr.slice(0, idx), toggled, ...arr.slice(idx + 1)])
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return ({ todoData: this.toggleProp(todoData, id, 'done') })
    })
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return ({ todoData: this.toggleProp(todoData, id, 'important') })
    })
  }

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter(item => item.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm onAdd={this.addItem} />
      </div>
    )
  }

}