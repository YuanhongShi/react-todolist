import React from 'react'
import TodoItem from './TodoItem'

import {useGlobalContext} from '../context/context'

const TodoList = () => {
  const {todos} = useGlobalContext()
  return (
    <div>
      <h2>TodoList</h2>
      {todos.length === 0 && <p>There is nothing todo</p>}
      {todos.map(todo =>{
        return <TodoItem {...todo} key={todo.id}/>
      })}
    </div>
  )
}

export default TodoList
