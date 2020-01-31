import React, { Component } from 'react'

import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'
export default class TodoList extends Component {
    static propTypes={
        todos:PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired
        }))

    }
    
    render() {
        return (
           <ul>
               {
                   this.props.todos.map( todo => {
                       return (
                        <TodoItem 
                        completeChange={this.props.completeChange}
                        key={todo.id } {...todo} />
                       )
                   })
               }
             
           </ul>
        )
    }
}
