import apis from './apis'
import axios from 'axios'
const ajax=axios.create({
    baseURL:apis.baseUrl
})

export const getTodos=() => {
    ajax.get(apis.todos)
}