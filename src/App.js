import React, { Component ,Fragment} from 'react'

import {
    TodoHeader,
    TodoInput,
    TodoList
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
                {id:1,title:"吃饭"},
                {id:2,title:"睡觉"}
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <TodoHeader  title="代办事项列表76"/>  
                <TodoInput btntitle="ADD"/>
                <TodoList  todos={this.state.todos}/>
            </Fragment>
        )
    }
}
