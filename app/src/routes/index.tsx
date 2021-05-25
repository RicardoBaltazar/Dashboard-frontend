import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import pageHome from '../screen/home';
import pageCompanies from '../screen/companies';
import pageRegister from '../screen/register';

export default function Routes(){
    return (
        <>
            <Router>
                    <Switch>
                        <Route exact path="/" component={pageHome} />
                        <Route path="/companies" component={pageCompanies} />
                        <Route path="/register" component={pageRegister} />
                    </Switch>
            </Router>
        </>
    )
}