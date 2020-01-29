import React, { Component ,Fragment} from 'react'

import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
}
from './components'


export default class App extends Component {
   /**************
    * 数据统一管理原则，数据全部挂载在根组件上
    */
    constructor(){
        super()
        this.state={
            btntitle:"11111111",
            todos:[
                {id:1,title:"吃饭",author:"张三"},
                {id:2,title:"睡觉",author:"李四"}
            ]
        }
    }
    addTodo= (todoTitle) => {
        this.setState({
            todos:this.state.todos.concat({
                id:Math.random(),
                title:todoTitle,
                author:"ss"
            })
        })
    }
    render() {
        return (
            <Fragment>
                <TodoHeader  title="代办事项列表76"/>  
                <TodoInput btntitle="ADD" addTodo={this.addTodo}/>
                <TodoList  todos={this.state.todos}/>
                <Like />
            </Fragment>
        )
    }
}
