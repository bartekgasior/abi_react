import types from './types';

const add = item => ({
    type: types.ADD_THEME, item
})

const set = item => ({
    type: types.SET_THEME, item
})

const reset = () => ({
    type: types.RESET_THEMES
})

export default {
    add,
    set,
    reset
}