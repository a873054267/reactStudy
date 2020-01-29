import React,{Component} from 'react'
import {render} from 'react-dom'
import classNames from 'classnames'
import styled from 'styled-components'
import './index.css'

const Title=styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`

class App extends Component{
    render(){
    return <div>
        <h1 className='redText'>元素中的样式</h1>
        <Title>styled-components引入的样式</Title>   
        <ol>
            <li className={classNames('a',{'b':true,'c':false})}>使用classnames</li>
            <li>styledComponents</li>
        </ol>
    </div>
    }
}
const app=new App({
    title:'component创建的'
}).render()
render(
    app,
    // <App  title="component创建的"/>,
    document.querySelector('#root')

)
