import { Component } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App