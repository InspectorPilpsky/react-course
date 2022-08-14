import TodoListItem from "../todo-list-item";
import './todo-list.css'

const TodoList = ({ todos }) => {

    return (
        <ul className="list-group todo-list">
            {todos.map((item) => {
                const { id, ...itemParams } = item;
                return (
                    <li key={id} className="list-group-item">
                        <TodoListItem {...itemParams} />
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList;