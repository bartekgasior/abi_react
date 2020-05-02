//import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import themeActions from '../redux/themes/duck/action';

export const useTheme = () => {
    const currentTheme = useSelector(state => state.themes.currentTheme);
    const dispatch = useDispatch();
    //const [theme, setTheme] = useState(currentTheme);

    const toggleTheme = () => {
        const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', nextTheme);
        dispatch(themeActions.set(nextTheme));
    }

    const isLightTheme = currentTheme !== 'light' ? false : true;

    return { toggleTheme, isLightTheme };
}