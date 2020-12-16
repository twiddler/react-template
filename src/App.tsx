import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import { MainRoute } from './routes/MainRoute'
import './styles.css'

export const App = hot(function () {
    return (
        <Router>
            <MainRoute />
        </Router>
    )
})
