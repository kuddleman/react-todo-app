import React from 'react'
import TodoForm from './TodoForm/TodoForm'
import TodoList from './TodoList/TodoList'

import { Row, Col } from 'reactstrap'

const TodoManager = ( props ) => {

  return (

     <Row>
       <Col>
         <TodoForm />
       </Col>

       <Col>
         <TodoList />
       </Col>
     </Row>  
  )
}

export default TodoManager