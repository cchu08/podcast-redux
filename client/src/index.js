import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

const episodes = [
  {
    title: 'Some episode',
  },
  {
    title: 'Some episode',
  },
];

ReactDOM.render(
  <Stream episodes={episodes} />,
  document.getElementById('app'),
);

module.hot.accept();

