import React, { Component ,Fragment} from 'react'

import {
    TodoHeader,
    TodoInput,
    TodoList
}
from './components'
export default class App extends Component {
    render() {
        return (
            <Fragment>
                <TodoHeader  title="代办事项列表76"/>  
                <TodoInput btntitle="按钮上的名称"/>
                <TodoList />
            </Fragment>
        )
    }
}
