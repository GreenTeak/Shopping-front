import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { hashHistory } from 'react-router-dom'
import Itemview from './Itemview'
import Account from './Account'

class ModalSwitch extends Component {
    previousLocation = this.props.location;
    componentWillUpdate(nextProps) {
        const { location } = this.props;
        // set previousLocation if props.location is not modal
        if (
            nextProps.history.action !== "POP" &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = this.props.location;
        }
    }

    render() {
        const { location } = this.props;
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        ); // not initial render
        return (
            <div>
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/" component={Itemview} />
                    <Route path="/Account" component={Account} />
                </Switch>
            </div>
        );
    }
}
export default ModalSwitch;