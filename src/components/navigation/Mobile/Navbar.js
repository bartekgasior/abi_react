import React, { useState } from 'react';
import styled from 'styled-components';
import { PagesList } from './PagesList';
import { Settings } from './Settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import allRoutes from '../../../routes';

const NavContainer = styled.div`
    position: fixed;
    z-index: 100;
    top: 10vh;
    left: 0;
    width: 100%;
    height: 90vh;
    display: flex;
   
    & .clickableBG{
        width: 100vw;
        height: 100%;

        transition: all 0.5s linear;
        visibility: ${({ animate }) => animate ? 'visible' : 'hidden'}; 
        background: ${({ animate }) => animate ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};  
    }
`
const Nav = styled.nav`
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;

    transition: all 0.5s ease-in-out;
    background: ${({ theme }) => theme.navbar_bg};
    right: ${({ animate }) => animate ? '0' : '-50vw'};    
`

const ButtonsList = styled.div`
    margin-top: 0.5em;
    display: flex;
    flex-direction: column;
    flex: 9;
`

const HiddenNavbar = styled.div`
    position: fixed;
    z-index: 1;
    height: 10vh;
    width: 100%;
    transition: all 0.5s;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.font_color};
    display: flex;   

    & .logo{
        width: 20%;
        border: ${({ theme }) => `1px solid ${theme.borderColors.light}`};
        margin: ${({ theme }) => theme.margin};
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .menuContainer{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 20%;
        height: 100%;
        margin-left: 60%;
        padding: 0 0.5em;
    }

    & .menuButton{
        height: 2em;
        width: 2em;
    }

`

export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    return <>
        <NavContainer animate={showNavbar}>
            <div className='clickableBG' onClick={() => showNavbar ? setShowNavbar(false) : null}></div>
            <Nav animate={showNavbar}>
                <ButtonsList>
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
                </ButtonsList>
                <Settings />

            </Nav>
        </NavContainer>
        <HiddenNavbar animate={showNavbar}>
            <div className='logo'>LOGO</div>
            <div className='menuContainer'>
                <FontAwesomeIcon icon={faBars} className='menuButton' onClick={() => setShowNavbar(!showNavbar)} />
            </div>
        </HiddenNavbar>
    </>
}
