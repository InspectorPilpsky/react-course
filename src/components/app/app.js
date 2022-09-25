import { Component } from "react";
import AppHeader from "../app-header"
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter"
import SearchPanel from "../search-panel"
import TodoList from "../todo-list"


import './app.css';

export default class App extends Component {

  state = {
    todoData: [
      { id: 1, label: 'Learn React', important: false },
      { id: 2, label: 'Build Awesome App', important: true },
      { id: 3, label: 'Drink Coffee', important: false }
    ]
  }

  deleteItem = (id) => {
    console.log('del123', id)
    this.setState(({ todoData }) => ({ todoData: todoData.filter((item) => item.id !== id) }))
  }

  addItem = (label) => {

    const max = this.state.todoData.reduce((acc, item) => item.id > acc.id ? item : acc);

    this.setState(({todoData}) => ({todoData:[...todoData, { id: max.id+1, label, important: false }]}))
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
        />
        <ItemAddForm onAdd={this.addItem} />
      </div>
    )
  }

}