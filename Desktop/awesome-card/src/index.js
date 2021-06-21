import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {CarGameData as store} from './data/DataStore';
import './index.css';
import Root from './views/Root';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

