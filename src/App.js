import React, {Component} from 'react';
import './App.css';
import BugList from "./BugList/BugList";
import CreateTask from "./CreateTask/CreateTask";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path={"/"} exact component={BugList} />
                        <Route path={"/create-task"} component={CreateTask} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
