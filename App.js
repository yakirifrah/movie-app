/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import {NavigationContainer} from '@react-navigation/native';

import rootReducer from './src/store/reducers';

const middleware = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

import Router from './src/Navigation';
const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
