//import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import languageActions from '../redux/languages/duck/action';

export const useLanguage = () => {
    const currentLanguage = useSelector(state => state.languages.currentLanguage);
    const dispatch = useDispatch();
    
    const changeLanguage = lang => {
        if (currentLanguage !== lang) {
            dispatch(languageActions.set(lang));
            localStorage.setItem('lang', lang);
        }
    }

    return { currentLanguage, changeLanguage };
}