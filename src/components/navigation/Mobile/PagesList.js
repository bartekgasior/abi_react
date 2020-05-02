import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const MainPageContainer = styled.span`
    display: flex;
    padding: 0 0.5em;
    font-size: ${({ theme }) => theme.fontSizes.md};

    & label{
        color: ${({ theme }) => theme.font_color};
        text-align: right;
        margin: 0 0.5em;
        flex:8;
    }

    & .fa{
        flex: 2;
        color: ${({ theme }) => theme.font_color};
        transition: transform 500ms ease-in-out;
        transform: ${({ triggerAnimations }) => triggerAnimations ? 'rotate(180deg)' : null};
    }

    &:hover{
        color: ${({ theme }) => theme.font_color_hover};
    }
`

const SubPagesList = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: ${({ theme }) => theme.margin};
    background: ${({ theme }) => theme.bg};
    text-align: right;

    overflow: hidden;
    transition: all 500ms ease-in-out;
    visibility: ${({ triggerAnimations }) => triggerAnimations ? 'visible' : 'hidden'};     
    max-height: ${({ triggerAnimations }) => triggerAnimations ? '500px' : '0px'};

    & label{
        padding-right: 10%;
        padding-top: 0.25em;
        padding-bottom: 0.25em;
        border-bottom:${({ theme }) => `1px solid ${theme.borderColors.light}`}; 
        color: ${({ theme }) => theme.font_color};
    }
`

export const PagesList = ({ mainPage, subPages }) => {
    const [showList, setShowList] = useState(false);

    const toggleList = () => {
        setShowList(!showList);
    }

    return <>
        <MainPageContainer
            onClick={toggleList}
            triggerAnimations={showList}
        >
            <label>{mainPage.name}</label>
            <div>
                <FontAwesomeIcon className='fa' icon={faCaretDown} />
            </div>
        </MainPageContainer>
        <SubPagesList triggerAnimations={showList}>
            {subPages.map((page, index) => {
                return <label key={index}>{page.name}</label>
            })}
        </SubPagesList>

    </>
}