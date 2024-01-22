/**
 * Created by rf1804
 *
 * @format
 */

/* eslint-disable global-require */
/* eslint-disable no-undef */

import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState);
  return store;
}
