import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import { SettingsList } from './SettingsList';
import { PagesList } from './PagesList';
import allRoutes from '../../../routes';

const Nav = styled.nav`
    position: fixed;
    z-index: 100;
    transition: all 1s;
    top: ${({ show }) => show ? 0 : '-20vh'};
    left: 0;
    background: ${({ theme }) => theme.navbar_bg};
    color: ${({ theme }) => theme.color};
    display: flex;
    width: 100%;
    height: 10vh;
    & div{
        margin: 0.25em;
    }
`
const Logo = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    border: 1px solid red;
    padding: 0.25em 0.5em;
    flex: 1;
    display: flex;
    justify-content: center;
`

const ButtonsList = styled.div`

    flex: 6;
    display: flex;
    justify-content: flex-end;

    & .links{
        position: relative;
        display: flex;
        flex: 1;
        margin-right: 10%;

        & > div{
            flex: 1;
            border: 1px solid red;
        }
    }

    & .listSettingsItem{
        position: relative;
        display: flex;
        align-items: center;
    }

    & .faIcon{
        
        cursor: pointer;
        width: 2.5em;
        height: 2.5em;
        color: ${({ theme }) => theme.button_bg};
        
        transition: transform 500ms ease-in-out;
        transform: ${({ triggerAnimation }) => triggerAnimation ? 'rotate(90deg)' : null};

        &:hover{
            color: ${({ theme }) => theme.button_bg_hover};
        }
    }
`

export const Navbar = () => {
    const settingsRef = useRef(null);
    const [showSettings, setShowSettings] = useState(false);
    const [scrollY, setScrollY] = useState({ offset: 0, show: true });

    const stableHandler = useCallback(setShowSettings, []);
    const scrollYHandler = useCallback(setScrollY, []);

    useEffect(() => {
        const handleClickOutside = e => {
            if (settingsRef.current !== null && settingsRef.current.contains(e.target)) { return; }
            stableHandler(false);
        };

        const handleScroll = () => {
            const nextScroll = window.pageYOffset;
            if (nextScroll > scrollY.offset) {
                scrollYHandler({ offset: nextScroll, show: false });
            } else {
                scrollYHandler({ offset: nextScroll, show: true });
            }
        }

        document.addEventListener('scroll', handleScroll);
        if (showSettings) { document.addEventListener('click', handleClickOutside); }
        else { document.removeEventListener('click', handleClickOutside); }
        return () => {
            document.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        }

    }, [showSettings, stableHandler, scrollY, scrollYHandler]);

    const toggleShowSettings = () => {
        setShowSettings(!showSettings);
    }

    // console.log(allRoutes.aboutUs.sub);

    return <Nav show={scrollY.show}>
        <Logo>
            LOGO
       </Logo>
        <div style={{ flex: 2 }}></div>
        <ButtonsList triggerAnimation={showSettings} >
            <div className="links">
                <PagesList
                    mainPage={allRoutes.aboutUs}
                    subPages={allRoutes.aboutUs.sub}
                />
                <PagesList
                    mainPage={allRoutes.personalInsurance}
                    subPages={allRoutes.personalInsurance.sub}
                />
                <PagesList
                    mainPage={allRoutes.businessInsurance}
                    subPages={allRoutes.businessInsurance.sub}
                />
                <PagesList
                    mainPage={allRoutes.contact}
                    subPages={allRoutes.contact.sub}
                />
            </div>
            <div className="listSettingsItem" ref={settingsRef} >
                <FontAwesomeIcon icon={faCog} className="faIcon" onClick={() => toggleShowSettings()} />
                <SettingsList
                    show={showSettings}
                />
            </div>
        </ButtonsList>
    </Nav>
}
