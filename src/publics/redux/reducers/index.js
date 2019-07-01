import { combineReducers } from 'redux';

import notes from './notes';

const appReducer = combineReducers({
    notes
});

export default appReducer;