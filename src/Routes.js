import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Repositories from './pages/repositories/Index';
import Home from './pages/Home/Index';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    );
};