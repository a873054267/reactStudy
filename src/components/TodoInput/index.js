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
        console.log(e.currentTarget)

    }
    render() {
        return (
            <div>
    <input type="text" value={this.state.inputValue } onChange={this.handleChange} /><button>{this.props.btntitle}</button>
            </div>
        )
    }
}
