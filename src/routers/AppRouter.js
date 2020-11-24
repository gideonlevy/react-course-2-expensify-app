import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../conponents/ExpenseDashboardPage';
import AddExpensePage from '../conponents/AddExpensePage';
import EditExpensePage from '../conponents/EditExpensePage';
import HelpPage from '../conponents/HelpPage';
import NotFoundPage from '../conponents/NotFoundPage';
import Header from '../conponents/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;