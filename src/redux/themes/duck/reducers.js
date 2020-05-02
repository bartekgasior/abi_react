import types from './types';

const INITIAL_STATE = {
    name: 'themes',
    currentTheme: localStorage.getItem('theme'),
    list: [
        'dark',
        'light'
    ]
}

const themesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_THEME:
            return {
                ...state, themes: [...state.themes, action.item]
            }
        case types.SET_THEME:
            return{
                ...state, currentTheme: action.item
            }
        case types.RESET_THEMES:
            return {
                ...state, list: []
            }
        default:
            return state
    }
}

export default themesReducer;