import React, { Component ,Fragment,useState,useEffect} from 'react'

import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
}
from './components'
//添加hook
const Counter = () => {
    //usestate第一个参数为状态，第二个参数为更改状态的方法,
    //useState在一个函数式组件中可以使用多个

    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("更新了")
    })

    return <div>
        <button onClick={() => setCount(count -1)}>
        -
      </button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
}
export default class App extends Component {
   /**************
    * 数据统一管理原则，数据全部挂载在根组件上
    */
    constructor(){
        super()
        this.state={
            btntitle:"11111111",
            todos:[
                {id:1,title:"吃饭",author:"张三",complete:true},
                {id:2,title:"睡觉",author:"李四",complete:false}
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
    completeChange=(id) => {
        this.setState((preState)=> {
            return{
                todos:preState.todos.map(v => {
                    if(v.id===id){
                        v.complete=!v.complete
                    }
                    return v 
                } )
            }

        })

    }
    render() {
        return (
            <Fragment>
                <TodoHeader  title="代办事项列表76"/>  
                <TodoInput btntitle="ADD" addTodo={this.addTodo}/>
                <TodoList 
                completeChange={this.completeChange}
                 todos={this.state.todos}/>
                <Like />
                <Counter />
            </Fragment>
        )
    }
}
