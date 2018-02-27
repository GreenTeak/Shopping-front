import ReactDOM from "react-dom";
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ModalSwitch  from './ModalSwitch'


ReactDOM.render(
    <Router>
        <Route component={ModalSwitch} />
    </Router>,
    document.getElementById('root')
);