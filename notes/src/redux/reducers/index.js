import notesReducer from "./notes";

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    notes:notesReducer,
})

export default rootReducer;