import { Route, Switch } from 'react-router-dom'
import { HelloWorld } from '../pages/HelloWorld'
import { NotFound } from '../pages/NotFound'

export function MainRoute() {
    return (
        <Switch>
            <Route exact path='/'>
                <HelloWorld />
            </Route>

            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}
