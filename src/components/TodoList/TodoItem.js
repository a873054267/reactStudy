import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <div>
    <h1 >{this.props.title}是{this.props.author}</h1>
            </div>
        )
    }
}
