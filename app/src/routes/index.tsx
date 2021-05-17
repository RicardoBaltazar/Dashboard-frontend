import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Routes(){
    return (
        <>
            <Router>
                    <Switch>
                        <Route exact path="/">
                            <h1>a</h1>
                        </Route>
                        <Route path="/b">
                            <h1>b</h1>
                        </Route>
                        <Route path="/c">
                            <h3>c</h3>
                        </Route>
                    </Switch>
            </Router>
        </>
    )
}