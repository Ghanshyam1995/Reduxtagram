var React = require("react");
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
import { Provider } from "react-redux";
var Home = require("./Home");
var View =require("./View");
import Index from "./Index";
import store from "../store";
class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className="header">Reduxtagram</h1>
                <Provider store={store}>
                    <Router>
                        <div className="container">
                            <Switch>
                                <Route exact path='/' component={Index} />
                                <Route exact path='/view' component={View}/>
                                <Route render={function () {
                                    return (
                                        <div className="error">
                                            <p>Page Not Found</p>
                                        </div>
                                    )
                                }} />
                            </Switch>

                        </div>
                    </Router>
                </Provider>
            </div>

        )
    }
}

module.exports = App;
