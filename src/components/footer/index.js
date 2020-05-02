import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookSquare, faInstagramSquare, faYoutubeSquare, faTwitterSquare, faGooglePlusSquare
} from '@fortawesome/free-brands-svg-icons';
import allRoutes from '../../routes';


const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5em;
    
    transition: all 1s ease-in-out;
    background: ${({ theme }) => theme.navbar_bg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const FooterIconsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    & .fa{
        padding: 0 0.75em;
        width: 2em;
        height: 2em;

        color: ${({ theme }) => theme.button_bg};
        cursor: pointer;

        &:hover{
            color: ${({ theme }) => theme.button_bg_hover};
        }
    }
`

const CopyrightContainer = styled.span`
    padding: 0.25em 0;
    opacity: 0.5;
    color: ${({ theme }) => theme.font_color};
    text-align: center;
`

export const Footer = () =>
    <FooterContainer>
        <FooterIconsContainer>
            <a href={allRoutes.socials.facebook} target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookSquare} className='fa' />
            </a>
            <a href={allRoutes.socials.instagram} target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagramSquare} className='fa' />
            </a>
            <a href={allRoutes.socials.youtube} target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutubeSquare} className='fa' />
            </a>
            <a href={allRoutes.socials.twitter} target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitterSquare} className='fa' />
            </a>
            <a href={allRoutes.socials.google} target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGooglePlusSquare} className='fa' />
            </a>
        </FooterIconsContainer>
        <CopyrightContainer>
            <FormattedMessage
                id='copyrights'
                values={{ copyright: <span>&copy;</span> }}
            />
        </CopyrightContainer>
    </FooterContainer>