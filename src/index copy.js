import React from 'react'
import ReactDOM from 'react-dom'

const App= (props) => {
return <h1>welcom to react {props.title}</h1>
}


ReactDOM.render(
    <App title='16.7' />,
    document.querySelector('#root')

)