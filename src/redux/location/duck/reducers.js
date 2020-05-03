import types from './types';

const INITIAL_STATE = {
    currentLocation: '/'
}

const locationsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.SET_LOCATION:
            return {
                ...state, currentLocation: action.item
            }
        default: 
            return state;
    }
}

export default locationsReducer;