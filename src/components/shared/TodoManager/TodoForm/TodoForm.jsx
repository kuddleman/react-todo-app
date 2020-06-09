import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

class TodoForm extends Component {
   constructor() {
     super()
     this.state = {
       newTodo: '',
     }
   }

   changeHandler = ( event ) => {
     this.setState({ newTodo: event.target.value })
   }

   submitHandler = ( event ) => {
     event.preventDefault();
     alert(`Hey, your new TodoItem is this: ${ this.state.newTodo }`)
     
   }


  render() {
    return (
      <Form onSubmit={ this.submitHandler }>
        <FormGroup>
          <Label htmlFor="todo">New Todo Task:</Label>
          <Input id="todo" 
                 type="input" 
                 rows="5" 
                 onChange={ this.changeHandler }
          />
        </FormGroup>
        <input type="submit" />
      </Form>
    )
  }
}

export default TodoForm

// 1. Take new task as input through input box 
// 2.Add a submit button, 
//    on clicking it the task should be displayed on the screen
//  3.Add a check box before every task
//  4.On clicking the check box, 
//     the ‘check tick’ symbol should be displayed
