import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos}) {

    const showTodos = todos.map(todo => <TodoItem key={todo.id} {...todo} />)
    
    return (
        <ul className='todo-list'>
            {showTodos}
        </ul>
    )
}