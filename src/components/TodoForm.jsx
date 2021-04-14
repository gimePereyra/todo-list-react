import React, {useState, useEffect, useRef} from 'react';

function TodoForm({onSubmit,  edit}) {
    const [input, setInput] = useState(edit?.text ? edit.text : "");

    const inputRef = useRef(null);

    useEffect(()=> {
        inputRef.current.focus();
    })

    const handlerSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            id : Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('');
    };

    const handlerChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <form
            className="todo-form"
            onSubmit={handlerSubmit}
        >
            {
                edit?.text
                    ? (
                        <>
                            <input
                                type="text"
                                placeholder="editar tarea"
                                value={input}
                                name="text"
                                onChange={handlerChange}
                                className="todo-input edit"
                                ref={inputRef}
                            />

                            <button className="todo-button edit">editar</button>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                placeholder="Tarea"
                                value={input}
                                name="text"
                                onChange={handlerChange}
                                className="todo-input"
                                ref={inputRef}
                            />

                            <button className="todo-button">Agregar</button>
                        </>
                    )
            }
        </form>
    )
}

export default TodoForm
