import React, { Component } from 'react'

export default class TodoInput extends Component {
    constructor(){
        super()
        this.state={
            inputValue:""
        }
    }
    handleChange=(e ) => {
        this.setState({
            inputValue:e.currentTarget.value
        })
      
    
    }
    handleClick=() => {
        this.props.addTodo(this.state.inputValue)
    }
    render() {
        return (
            <div>
    <input type="text" value={this.state.inputValue } onChange={this.handleChange} /><button onClick={this.handleClick}>{this.props.btntitle}</button>
            </div>
        )
    }
}
