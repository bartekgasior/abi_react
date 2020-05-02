import { combineReducers } from 'redux';
import themesReducer from './themes/duck';
import languagesReducer from './languages/duck';

const rootReducer = combineReducers({
    themes: themesReducer,
    languages: languagesReducer
})

export default rootReducer;