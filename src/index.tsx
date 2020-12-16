import axios from 'axios'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

axios.defaults.baseURL = process.env.API_BASE_URL

const reactRoot = document.createElement('div')
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    reactRoot
)
document.body.appendChild(reactRoot)
