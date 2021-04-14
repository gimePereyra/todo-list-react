import React, {useState} from 'react'
import TodoForm from './TodoForm.jsx'
import { RiCheckboxCircleLine, RiDeleteBin5Line } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import Swal from 'sweetalert2'

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
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tarea Editada.',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return todos.map((todo, index) => {
        return edit.id !== null && edit.id === todo.id
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
                title="Click para completar"
            >

                <div
                    key={todo.id}
                    onClick={()=> completeTodo(todo.id)}
                    >
                    {todo.text}
                </div>

                <div className="icons">
                    <TiEdit
                        className="delete-icon"
                        onClick={()=> setEdit({
                            id: todo.id,
                            text : todo.text})}
                            title="Click para editar"
                    />

                    <RiCheckboxCircleLine
                        className="delete-icon"
                        onClick={()=> completeTodo(todo.id)}
                        title="Click para completar"
                    />

                    <RiDeleteBin5Line
                        className="edit-icon"
                        onClick={()=> removeTodo(todo.id)
                        }
                        title="Click para eliminar"
                    />
                </div>

            </div>
        )
    })
}

export default Todo
