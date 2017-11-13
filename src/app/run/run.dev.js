import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import DevTools from '../components/devTool';
import reducerStore from '../store';
import config from '../config'

// 本地mock数据
// if(config.isDebug){
//   require('../utils/mock');
// }

window.BASE_URL = '/';
const logger = createLogger({
  level: 'info',
});
const monitorReducer = (state = {}, action) => state;

const enhancer = compose(
  applyMiddleware(thunk.withExtraArgument()),
  DevTools.instrument(monitorReducer, {
    maxAge: 50,
    shouldCatchErrors: true,
  }),
);

const store = createStore(reducerStore, enhancer);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <div>
          <Component store={store} />
          <DevTools />
        </div>
      </Provider>
    </AppContainer>,
    document.getElementById('App')
  );
}

export default render;
