import types from './types';

const INITIAL_STATE = {
    name: 'languages',
    currentLanguage: localStorage.getItem('lang'),
    list: [
        'pl',
        'en'
    ]
}

const languageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_LANGUAGE:
            return {
                ...state, list: [...state.list, action.item]
            }
        case types.SET_LANGUAGE:
            return {
                ...state, currentLanguage: action.item
            }
        case types.RESET_LANGUAGES:
            return {
                ...state, list: []
            }
        default:
            return state
    }
}

export default languageReducer;