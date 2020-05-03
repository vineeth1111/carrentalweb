import React,{Component } from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../Home';
import history from './History';
import BookingDetails from '../Components/Rental/BookingDetails';

export default class Routes extends Component{

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/booking-details" component={BookingDetails} />
                </Switch>
            </Router>
        )
    }
}