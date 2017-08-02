import 'babel-polyfill';
import "style-loader!css-loader!index.css"

import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import store from './configureStore.js';

import App from "Components/App"

render(
  <AppContainer>
    <Provider store={ store }>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root-entry')
);

// Handle hot reloading requests from Webpack
if (module.hot) {
  module.hot.accept('./components/App', () => {
    //If we receive a HMR request for our App container, then
    //reload it using require (we can't do this dynamically with import)
    const NextApp = require('./components/App').default;

    // And render it into the root element again
    render(
      <AppContainer>
        <Provider store={ store }>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('root-entry')
    );
  });

  module.hot.accept('./reducers', () => {
    const newReducer = require('./reducers').default;
    store.replaceReducer(newReducer);
  });
}
