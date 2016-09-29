// Configure Material-UI
import { deepOrange500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Base Configuration
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore, routerReducer } from 'react-router-redux';

// Configure Store
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// Configure Reducers
import auth from './Login/loginReducer';
import common from './common/commonReducer';

// Routing Pages
import LoginContainer from './Login/LoginContainer';
import Splash from './common/SplashPage';

const reducer = combineReducers({
  auth,
  common,
  routing: routerReducer,
});

const store = createStore(
  reducer,
  window.devToolsExtension && window.devToolsExtension(),
  compose(
    applyMiddleware(
      routerMiddleware(browserHistory),
      thunk,
      createLogger()),
  )
);

// Material-UI theme
const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#293171',
    accent1Color: deepOrange500,
  },
});

// Seet up history
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Splash} />
        </Router>
      </Provider>
    </div>
  </MuiThemeProvider>,
  document.getElementById('root')
  );
