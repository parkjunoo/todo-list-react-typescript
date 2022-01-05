import { createStore } from 'redux';
import rootReducer from './modules/index';

const store = createStore(rootReducer);
export default store;
