import React, { Component } from 'react'

export default class TodoItem extends Component {
    handleChange=()=> {
        /*****
         * 解构赋值，并赋
         */
        const {
            completeChange=()=>{}
            ,id}=this.props

        completeChange(id)
    }
    render() {
        console.log("render")
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
