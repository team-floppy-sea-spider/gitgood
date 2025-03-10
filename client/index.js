import React from 'react';
import { render } from 'react-dom';
import App from './App';
import styles from './stylesheets/styles.scss';
import '@fontsource/roboto';
import { store } from './store/store';
import { Provider } from 'react-redux';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
