import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const TodoForm = ( props ) => {

  return (
    <Form>
      <FormGroup>
        <Label htmlFor="todo">New Todo Task:</Label>
        <Input id="todo" type="input" rows="5" />
      </FormGroup>
      <Button color="success">Submit</Button>
    </Form>
  )
}

export default TodoForm

// 1. Take new task as input through input box 
// 2.Add a submit button, 
//    on clicking it the task should be displayed on the screen
//  3.Add a check box before every task
//  4.On clicking the check box, 
//     the ‘check tick’ symbol should be displayed
