import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import { routes } from '../routes/routes';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const Root = () => {
  return ( 
    //Provider
    <BrowserRouter>
            <MainTemplate>
                   <Switch>
                        <Route exact path={routes.login} component={LoginPage} />
                        <Route path={routes.home} component={HomePage} />
                   </Switch>
            </MainTemplate>
    </BrowserRouter>

    //Provider
   );
}
 
export default Root;
