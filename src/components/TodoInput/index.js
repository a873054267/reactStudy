import React, { Component,createRef} from 'react'

export default class TodoInput extends Component {
    constructor(){
        super()
        this.state={
            inputValue:""
        }
        //创建ref
        this.inputDom=createRef()
    }
    handleChange=(e ) => {
        this.setState({
            inputValue:e.currentTarget.value
        })
      
    
    }
    handleClick=() => {

       
        this.props.addTodo(this.state.inputValue)
        this.setState({
            inputValue:""
        },() => {
            //重新聚焦
            this.inputDom.current.focus()
        })
    }
    handleKeyUp=(e)=>{
        if(e.keyCode===13){
            this.handleClick()
 
        }

    }
    render() {
        return (
            <div>
    <input type="text" 
    value={this.state.inputValue } 
    onKeyUp={this.handleKeyUp}
    onChange={this.handleChange} 
    ref={this.inputDom}
    /><button onClick={this.handleClick}>{this.props.btntitle}</button>
            </div>
        )
    }
}
