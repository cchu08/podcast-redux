import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream';

const episodes = [
  {
    title: 'Some episode',
  },
  {
    title: 'Some episode',
  },
];

const store = configureStore();
store.dispatch(actions.setEpisodes(episodes));

ReactDOM.render(
  <Provider store={store}>
    <Stream />
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();

