import styles from "./TodoList.module.css"
import Todo from "../Todo/Todo";
function TodoList({ todoList, deleteTask, handleEdit, toggleTask }) {
    return (
        <div className={styles.TodoList_container}>
            
            {todoList.map((todo) =>
            (
                <div key={todo.id}  >

                    <Todo
                        todo={todo}
                        deleteTask={deleteTask}
                        handleEdit={handleEdit}
                        toggleTask={toggleTask}
                    />
                </div>
            ))}
        </div>
    )
}

export default TodoList;