import React, { Component ,Fragment,useState,useEffect,createContext} from 'react'


import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
}
from './components'
/**
 * 创建全局传递
 */
const countContext = createContext('55');
const ThemeContext = React.createContext('light');
// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  //孙子组件
  class ThemedButton extends React.Component {
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “dark”。
    static contextType = ThemeContext;
    render() {
        console.log(this.context)
      return <button theme={this.context} >+</button>;
    }
  }

//添加孙子组件

class Counter2 extends React.Component {
    // // eslint-disable-next-line
    // const {Provider,Consumer}=createContext()
    //usestate第一个参数为状态，第二个参数为更改状态的方法,
    //useState在一个函数式组件中可以使用多个
    static contextType=countContext

    render() {
              return(
    <div>
        <p>我是孙子节点</p>
 
        <span>{this.context}</span>
     
    </div>
    )
    }
}
//添加hook
const Counter = () => {
    //usestate第一个参数为状态，第二个参数为更改状态的方法,
    //useState在一个函数式组件中可以使用多个

    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("更新了")
    })

    return <div>
       <div> <span>我是父节点</span></div>
        <button onClick={() => setCount(count -1)}>
        -
      </button>
      
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <div>
        <Counter2 />
      </div>
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
                <countContext.Provider value={34}>
                <Counter />
                </countContext.Provider>   
                <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
            </Fragment>
        )
    }
}
