import React, { useState } from 'react';
import styled from 'styled-components';

import flag_pl from '../../../icons/flags/flag_pl.png';
import flag_us from '../../../icons/flags/flag_us.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../../hooks/useLanguage';
import { useTheme } from '../../../hooks/useTheme';

const SettingsContainer = styled.div`
    flex: 1; 
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Settings = () =>
    <SettingsContainer>
        <LanguageSelect />
        <ThemeMode />
    </SettingsContainer>

const LanguagesContainer = styled.div`
    width: 100%;
    padding-left: 70%;
    position: relative;
    

    & > img{
        width: 20%;
        height: 100%;
    }

    & .fa{
        width: 10%;
        height: 100%;
    }

    & .select{
        position: absolute;
        display: flex;
        flex-direction: column;
        bottom: 100%;
        background: ${({ theme }) => theme.navbar_bg};
        border: ${({ theme }) => `1px solid ${theme.borderColors.dark}`};

        & .flag{
            padding: 0 0.25em;
            width: 3em;
            height: 2em;
            &:hover{
                background: ${({ theme }) => theme.bg};
            }
        }
    }
`

const LanguageSelect = () => {
    const { currentLanguage, changeLanguage } = useLanguage();
    const [showFlags, setShowFlags] = useState(false);

    return <LanguagesContainer>
        <img
            src={currentLanguage === 'pl' ? flag_pl : flag_us} alt='flag'
            onClick={() => setShowFlags(!showFlags)}
        />
        <FontAwesomeIcon
            className='fa'
            icon={faCaretUp}
            onClick={() => setShowFlags(!showFlags)}
        />
        {showFlags
            ? <div className='select'>
                <img
                    onClick={() => changeLanguage('pl')}
                    className='flag'
                    src={flag_pl}
                    alt={'flag_pl'}
                />
                <img
                    onClick={() => changeLanguage('en')}
                    className='flag'
                    src={flag_us}
                    alt={'flag_us'}
                />
            </div>
            : null
        }
    </LanguagesContainer>
}

const ThemeModeContainer = styled.div`
    width: 100%;
    text-align: right;

    & .fa{
        height: 2em;
        width: 2em;
    }
`

const ThemeMode = () => {
    const { toggleTheme, isLightTheme } = useTheme();

    return <ThemeModeContainer>
        <FontAwesomeIcon
            className='fa'
            icon={isLightTheme ? faToggleOn : faToggleOff}
            onClick={() => toggleTheme()}
        />
    </ThemeModeContainer>
}
