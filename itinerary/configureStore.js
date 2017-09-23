import { createStore } from 'redux'
import appReducer from './src/reducers'

export default function configureStore() {
  let store = createStore(appReducer);
  return store;
}
