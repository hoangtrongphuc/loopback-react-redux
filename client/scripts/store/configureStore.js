import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'; // TODO: Next step
export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
}