import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducerStore from '../store';

window.BASE_URL = '/pmTool/';
const enhancer = compose(
  applyMiddleware(thunk.withExtraArgument()),
);

const store = createStore(reducerStore, enhancer);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component store={store} />
    </Provider>,
    document.getElementById('App')
  );
}

export default render;
