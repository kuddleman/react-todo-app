import React from 'react'
import TodoForm from './TodoForm/TodoForm'
import TodoList from './TodoList/TodoList'

const TodoManager = ( props ) => {

  return (
    <>
      <p>Hello from TodoManager</p>
      <TodoForm />
      <TodoList />
    </>  
  )
}

export default TodoManager