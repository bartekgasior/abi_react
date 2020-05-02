import types from './types';

const add = item => ({
    type: types.ADD_LANGUAGE, item
})

const set = item => ({
    type: types.SET_LANGUAGE, item
})

const reset = () => ({
    type: types.RESET_LANGUAGES
})

export default {
    add,
    set,
    reset
};