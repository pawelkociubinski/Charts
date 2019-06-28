import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';
import GlobalStyle from './styles';

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import store, {history} from './store';
import App from './pages/App';

const ROOT_NODE = document.getElementById('root');

const PROGRAM = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <GlobalStyle />
        <App />
      </Fragment>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(PROGRAM, ROOT_NODE);
