import React, {useState} from 'react'
import Todo from './Todo.jsx';
import TodoForm from './TodoForm.jsx'
import Swal from 'sweetalert2'



function TodoList() {

    const [todos, setTodos] = useState([]);

    const isInvalidName = ({ text }) => {
        const todoNameValidator = /^\s+$/;
        return todoNameValidator.test(text) || !text;
    }

    const addTodo = (todo) => {

        if (isInvalidName(todo)) return;

        const newTodos = [...todos, todo];
        setTodos(newTodos);
    }

    const completeTodo = (idTodo) => {
        const updatedTodos = todos.map(todo => {
            if(todo.id === idTodo) {
                todo.isComplete = true;
            }
            return todo
        })
        setTodos(updatedTodos)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tarea Completada',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const removeTodo = idTodo => {
        const updatedTodos = [...todos].filter(todo => todo.id !== idTodo);
        setTodos(updatedTodos);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Tarea Eliminada',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const editTodo = (idTodo, newValue) => {
        if(isInvalidName(newValue)) return;

        setTodos(previusTodos => previusTodos.map(todo => todo.id === idTodo ? newValue : todo))
    }

    return (
        <>
            <div>
                <h1>¿Qué vas a hacer hoy?</h1>
                <p>«Si hoy no puedes hacer grandes cosas, haz cosas pequeñas de una gran manera». Napoleon Hill.</p>
                <TodoForm onSubmit={addTodo}/>
                <Todo
                    todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                    />
            </div>
        </>
    )
}

export default TodoList
