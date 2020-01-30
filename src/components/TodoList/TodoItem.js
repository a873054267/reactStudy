import React, { Component } from 'react'

export default class TodoItem extends Component {
    handleChange=()=> {
        this.props.completeChange(this.props.id)
    }
    render() {
        return (
            <div>
    <input type="checkbox" 
     checked={this.props.complete}
     onChange={this.handleChange}
     />
    {this.props.title}是{this.props.author}
            </div>
        )
    }
}
