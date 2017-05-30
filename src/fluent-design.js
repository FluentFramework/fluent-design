import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RootContainer from './components/RootContainer';

ReactDOM.render((
    <AppContainer>
        <RootContainer />
    </AppContainer>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/RootContainer', () => {
    const NextRootContainer = require('./components/RootContainer').default;

    ReactDOM.render((
      <AppContainer>
        <NextRootContainer />
      </AppContainer>
    ), document.getElementById('root'));
  })
}