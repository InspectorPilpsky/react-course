import AppHeader from "../app-header"
import ItemStatusFilter from "../item-status-filter"
import SearchPanel from "../search-panel"
import TodoList from "../todo-list"


import './app.css';

const App = () => {
    const todoData = [
      { id: 1, label: 'Learn React', important: false },
      { id: 2, label: 'Build Awesome App', important: true },
      { id: 3, label: 'Drink Coffee', important: false }
    ]
    
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData} />
      </div>
    )
  }

  
export default App;