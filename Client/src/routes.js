import React, { useContext } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import history from './utils/history';

import Context from './utils/context';
import Core from "./hooks/coin";

const Routes = () => {
    const context = useContext(Context)

    return(
        <div>
          <Router history={history} >
          <div>
            <Switch>
              <Route exact path='/' component={Core} />
            </Switch>
          </div>
          </Router>
        </div>
  )}



export default Routes;
