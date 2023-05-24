import { useState } from "react"
import styles from './AddTodo.module.css'
function AddTodo({ onClickAddTodo }) {
    const [text, setText] = useState('')

    const handleOnClick = (e) => {
        e.preventDefault()
        const todo = {
            id: Date.now(),
            text: text,
            checked: false
        }
        
        onClickAddTodo(todo)
        setText("")
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className={styles.AddTodo_container}>
            <header>
      <h1 className={styles.AddTodo_container_head}>What's up,</h1>
        <input className={styles.AddTodo_username} type="text" placeholder="name" />
        <p >CREATE A TO DO</p>
        <p className={styles.AddTodo_phrase}>What's on your To-do list? </p>
      </header>
            <input type="text"
                value={text}
                placeholder="Enter a task"
                onChange={(e) => handleChange(e)}
                className={styles.AddTodo_input}
            />
            <button 
            className={styles.AddTodo_btn}
            onClick={handleOnClick}
            >add</button>
        </div>)
}

export default AddTodo