import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import AddEmployees from "../pages/addEmployees";
import ListEmployees from "../pages/listEmployees";
import AddCompanies from "../pages/addCompanies";
import ListCompanies from "../pages/listCompanies";
import Register from '../pages/register';

export default function Routes(){
    return (
        <>
            <Router>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/register" component={Register} />
                        <Route path="/add-employees" component={AddEmployees} />
                        <Route path="/add-companies" component={AddCompanies} />
                        <Route path="/list-employees" component={ListEmployees} />
                        <Route path="/list-companies" component={ListCompanies} />
                    </Switch>
            </Router>
        </>
    )
}