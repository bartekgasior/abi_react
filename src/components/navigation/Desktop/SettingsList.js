import React from 'react';
import styled from 'styled-components';

import { useTheme } from '../../../hooks/useTheme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';

import flag_pl from '../../../icons/flags/flag_pl.png';
import flag_us from '../../../icons/flags/flag_us.png';
import { useLanguage } from '../../../hooks/useLanguage';

const LiRow = styled.div`
    white-space: nowrap;
    width: 100%;
    color: ${({ theme }) => theme.font_color};

    & .inlineEl {
        display: inline-block;
        vertical-align: top;
    }

    & .smFaIcon {
        width: 25%;
        height: 1.5em;
    }

    & .langSelect{
        width: 100%;

        & option{
            cursor: pointer;
        }
    }

    & img{
        width: 30px;
        height: 25px;
    }
`

const SettingLabel = styled.label`
    width: ${({ w }) => w};
    font-weight: bold;
    vertical-align: middle;
    text-align: ${({ center }) => center ? 'center' : 'left'};
`

const LiThemeElement = ({ label, fa, onToggleClicked }) =>
    <LiRow>
        <SettingLabel w={'75%'} className='inlineEl'>{label}</SettingLabel>
        <FontAwesomeIcon className='inlineEl smFaIcon' icon={fa} onClick={onToggleClicked} />
    </LiRow>

const LiLanguageElement = ({ label, flag, onSelected, currentLang }) =>
    <LiRow>
        <SettingLabel w={'25%'} className='inlineEl' center={true}>{label}</SettingLabel>
        <SettingLabel w={'25%'} className='inlineEl' center={true}>{flag}</SettingLabel>
        <SettingLabel w={'50%'} className='inlineEl' center={true}>
            <select
                onChange={(e) => onSelected(e.target.value)}
                className="langSelect"
                value={currentLang}
            >
                <option value={'en'}>eng</option>
                <option value={'pl'}>pl</option>
            </select>
        </SettingLabel>

    </LiRow>

const Settings = styled.ul`
    list-style: none;
    background: ${ ({ theme }) => theme.bg};
    position: absolute;
    z-index: 1;
    top: 1.5em;  
    right: 0;
    display: block;
    margin: 0;
    padding: 0;
    border: 1px solid ${ ({ theme }) => theme.borderColors.light};
    overflow: hidden;
   
    transition: all 500ms ease-in-out;
    visibility: ${({ triggerAnimation }) => triggerAnimation ? 'visible' : 'hidden'};     
    max-height: ${({ triggerAnimation }) => triggerAnimation ? '250px' : '0px'};

    & li{
    width: 14em;
    height: 2em;
    padding: 0.25em;
    margin: 0.25em;

        & :hover{
            cursor: pointer;
            font-weight: bold;
        }
    }
`

export const SettingsList = ({ show }) => {
    const { toggleTheme, isLightTheme } = useTheme();
    const { language, changeLanguage } = useLanguage();

    return <Settings triggerAnimation={show}>
        <li>
            <LiThemeElement
                label={<FormattedMessage id={isLightTheme ? 'theme.dark.off' : 'theme.dark.on'} />}
                fa={isLightTheme ? faToggleOn : faToggleOff}
                onToggleClicked={() => toggleTheme()}
            />
        </li>
        <li>
            <LiLanguageElement
                label={<FormattedMessage id={language === 'pl' ? 'website.language.pl' : 'website.language.en'} />}
                flag={<img src={language === 'pl' ? flag_pl : flag_us} alt='flag' />}
                onSelected={changeLanguage}
                currentLang={language}
            />
        </li>
    </Settings>
}
