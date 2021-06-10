import React from 'react';
import HomePage from './HomePage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Design from '../views/Design'
import { routes } from '../routes';

const Root = () => {
  return (
    <div className="App">

      <BrowserRouter  basename={process.env.PUBLIC_URL}>
           <MainTemplate>
             <Switch>
               <Route exact path={routes.home} component={HomePage}/>
               <Route exact path={routes.design} component={Design} />
             </Switch>
           </MainTemplate>
      </BrowserRouter>
    </div>
  );
}

export default Root;
