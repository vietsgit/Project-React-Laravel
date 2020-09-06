import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from '../Body/Home/Home';
import Personsal from '../Body/Personal/Personsal';

class Routers extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/home'> <Home /> </Route>
                <Route exact path='/personal'> <Personsal /> </Route>
            </Switch>
        )
    }
}
export default Routers;