import React, {useState} from 'react'
import Todo from './Todo.jsx';
import TodoForm from './TodoForm.jsx'

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
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const removeTodo = idTodo => {
        const updatedTodos = [...todos].filter(todo => todo.id !== idTodo);
        setTodos(updatedTodos);
    }

    const editTodo = (idTodo, newValue) => {
        if(isInvalidName(newValue)) return;

        setTodos(previusTodos => previusTodos.map(todo => todo.id === idTodo ? newValue : todo))
    }

    return (
        <div>
            <h1>what's the from Today</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                editTodo={editTodo}
                />
        </div>
    )
}

export default TodoList
