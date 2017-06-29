import React from 'react';
import ReactDOM from 'react-dom';
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
  <Stream episodes={episodes} />,
  document.getElementById('app'),
);

module.hot.accept();

