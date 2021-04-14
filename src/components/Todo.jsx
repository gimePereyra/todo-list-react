import React, {useState} from 'react'
import TodoForm from './TodoForm.jsx'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo ({todos, completeTodo, removeTodo, editTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        text: ''
    })

    const submitUpdate = (newValue) => {
        editTodo(edit.id, newValue);

        setEdit ({
            id:null,
            text: ''
        })
    }

    return todos.map((todo, index) => {
        return edit.id !== null && edit.id == todo.id
        ? <TodoForm
            edit={edit}
            onSubmit={submitUpdate}
        />
        : (
            <div className={
                todo.isComplete
                ? "todo-row complete"
                : "todo-row"
                }
                key={index}
                title="Tap to complete"
            >

                <div
                    key={todo.id}
                    onClick={()=> completeTodo(todo.id)}
                    >

                    {todo.text}
                </div>

                <div className="icons">
                    <RiCloseCircleLine
                        className="delete-icon"
                        onClick={()=> removeTodo(todo.id)}
                    />
                    <TiEdit
                        className="edit-icon"
                        onClick={()=> setEdit({
                            id: todo.id,
                            text : todo.text})}
                    />
                </div>

            </div>
        )
    })
}

export default Todo
