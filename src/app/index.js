/**
 * gis index
 * @author october.yan
 */
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { AppContainer } from 'react-hot-loader';
import thunk from 'redux-thunk';

import RouterMap from './RouterMap';
import reducerStore from './store';

const logger = createLogger({
  level: 'info',
});
const monitorReducer = (state = {}, action) => state;

const enhancer = compose(
  applyMiddleware(thunk.withExtraArgument(), logger),
);

const store = createStore(
  reducerStore,
  enhancer,
);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <div>
          <Component />
        </div>
      </Provider>
    </AppContainer>,
    document.getElementById('App')
  );
};

render(RouterMap);

if (module.hot) {
  module.hot.accept('./RouterMap', () => {
    const NextApp = require('./RouterMap').default;
    render(NextApp);
  });
}