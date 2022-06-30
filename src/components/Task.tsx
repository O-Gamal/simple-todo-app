import React, { useState, useRef, useEffect } from 'react'
import { Todo } from '../model'
import './styles.css'

interface Props {
    index: number,
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const Task = ({ todo, todos, setTodos, index }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map((todo) => todo.id === id ? { ...todo, todo: editTodo } : todo));
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])


    return (

                <form
                    className='task'
                    onSubmit={(e) => handleEdit(e, todo.id)}
                >
                    {!edit ? (
                        <div className="task-text-container">
                            <span className="check material-symbols-outlined" onClick={() => handleDone(todo.id)}>
                                {todo.isDone ? 'check_box' : 'check_box_outline_blank'}
                            </span>
                            <span className="task-text" onDoubleClick={() => {
                                if (!todo.isDone) setEdit(!edit)
                            }}>{todo.todo}</span>
                        </div>
                    ) : (
                        <input ref={inputRef} className='edit-field' value={editTodo} onChange={(e) => { setEditTodo(e.target.value) }} />
                    )
                    }

                    <div className='task-controls'>
                        {edit ? <span className="control material-symbols-outlined" onClick={(e) => handleEdit(e, todo.id)} >done</span>
                            : <span className="control material-symbols-outlined" onClick={() => {
                                if (!todo.isDone) setEdit(!edit)
                            }}>edit</span>}
                        <span className="control material-symbols-outlined" onClick={() => handleDelete(todo.id)}>delete</span>
                    </div>
                </form>

    )
}

export default Task