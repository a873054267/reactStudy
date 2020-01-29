import React, { Component } from 'react'

export default class Like extends Component {
    constructor(){
        super()
        this.state={
            isLike:false
        }
    }
    //点击事件
    handleClick= () => {
        //this.state.isLike=!this.state.isLike
        // this.setState({
        //     isLike:!this.state.isLike
        // })
        //第二种写法,匿名函数，会传递上一次的state,props
        this.setState((preState,props) => {
            console.log("上一次的state")
            console.log(preState)
            return{
                isLike:!preState.isLike
            }
        },
        () => {
            console.log("当前state")
            console.log(this.state)
        })
    }
    render() {
        return (
            <div>
                <span onClick={this.handleClick}>
                {this.state.isLike?'喜欢🧡':'取消💛'}
                </span>
            </div>
        )
    }
}
