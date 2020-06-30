import React, { Component } from 'react'

export default class TodoForm extends Component {
    render() {
        return(
           <form> 
               <h2>Add New Todo</h2>
               <label>Title</label>
               <input name='title' />
               <label>Content</label>
               <input name='content' />
               <label>Urgent</label>
               <input type='checkbox' name='urgent' />
               <input type='submit' />
           </form>
        )
    }
}