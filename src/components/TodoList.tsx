import React from 'react'
import { Todo } from '../model'
import Task from './Task'
import './styles.css'

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,

}

const TodoList = ({todos, setTodos}: Props) => {
  return (
    <div className='todo-list-container'>
                <div className="todo-list list">
                    <h2 className="todo-header">Todo</h2>
                    <div className="cards">
                        {todos.map((todo, index) => (
                            !todo.isDone && <Task index={index} todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
                        ))}
                    </div>
                </div>


        <div className="done-list list" >
            <h2 className="done-header">Done</h2>
            <div className="cards">
                {todos.map((todo, index) => (
                    todo.isDone && <Task index={index} todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
                ))}
            </div>
        </div>

    </div>
  )
}

export default TodoList