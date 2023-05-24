import styles from './Todo.module.css';
import React, { useState } from 'react';

//heroicons;
import { CheckIcon, PencilIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';


function Todo({ todo, deleteTask, handleEdit, toggleTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);
    const [isChecked, setIsChecked] = useState(todo.checked);
    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        handleEdit(todo.id, newText);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setNewText(todo.text);
    };

    const handleInputChange = (e) => {
        setNewText(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked);
        toggleTask(todo.id)
    }
    {
        return (
            <div className={styles.Todo_container}>
                {isEditing ? (
                    <div className={styles.Todo_container_edit} >
                        <input type="text" value={newText}
                            className={styles.Todo_input_isediting}
                            onChange={handleInputChange} />
                        <button
                            onClick={handleSaveClick}
                            className={styles.Todo_save_btn}
                        >
                            <CheckIcon
                                strokeWidth={2}
                                width={24} height={24} />
                        </button>
                        <button
                            onClick={handleCancelClick}
                            className={styles.Todo_cancel_btn}
                        ><XMarkIcon width={24} height={24} /></button>
                    </div>
                ) : (
                    <div>
                        <div className={styles.Todo_container} >
                            <input type="checkbox"
                                className={styles.Todo_input}
                                onChange={handleCheckboxChange}
                            />

                            <label className={styles.Todo_text}>
                                {todo.text}
                                <p className={styles.checkmark}>
                                    <CheckIcon strokeWidth={2} width={24} height={24} />
                                </p>
                            </label>
                            <button
                                className={styles.Todo_delete_btn}
                                onClick={() => deleteTask(todo.id)}
                            >
                                <TrashIcon width={24} height={24} />
                            </button>
                            <button
                                onClick={handleEditClick}
                                className={styles.Todo_edit_btn}

                            ><PencilIcon width={24} height={24} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

        )
    }
}
export default Todo;