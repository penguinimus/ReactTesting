import { combineReducers } from 'redux';
import stateStuff from './test';
import searchValue from './reducer_demo';

const rootReducer = combineReducers({
    stateStuff: stateStuff,
    searchValue: searchValue
});

export default rootReducer;