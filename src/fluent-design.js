import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Hello from './components/Hello';

ReactDOM.render((
    <AppContainer>
        <Hello />
    </AppContainer>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/Hello', () => {
    const NextRootContainer = require('./components/Hello').default;

    ReactDOM.render((
      <AppContainer>
        <NextRootContainer />
      </AppContainer>
    ), document.getElementById('root'));
  })
}