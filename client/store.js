import { createStore, applyMiddleware } from 'redux';
//change this out 
import dummyReducer from './redux/reducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
    //change this out 
  dummyReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;