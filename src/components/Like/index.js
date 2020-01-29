import React, { Component } from 'react'

export default class Like extends Component {
    constructor(){
        super()
        this.state={
            isLike:true
        }
    }
    //点击事件
    handleClick= () => {
        // this.state.isLike=!this.state.isLike
        this.setState({
            isLike:!this.state.isLike
        })
    }
    render() {
        return (
            <div>
                <span onClick={this.handleClick}>
                {this.state.isLike?'取消🧡':'喜欢💛'}
                </span>
            </div>
        )
    }
}
