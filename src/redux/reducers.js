import { combineReducers } from 'redux';
import themesReducer from './themes/duck';
import languagesReducer from './languages/duck';
import locationsReducer from './location/duck';

const rootReducer = combineReducers({
    themes: themesReducer,
    languages: languagesReducer,
    locations: locationsReducer
})

export default rootReducer;