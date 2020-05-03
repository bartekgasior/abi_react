import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PagesMainLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    background: ${({ theme, cursorOver, active }) => cursorOver ? theme.button_bg_hover : (active ? theme.button_active : null)};
    color: ${({ theme, cursorOver, active }) => (cursorOver || active) ? theme.font_color_hover : theme.font_color};

`

const ElementContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    cursor: pointer;
    width: 100%;

    & .pagesContainer{
        background: ${({ theme }) => theme.navbar_bg};
        min-width: 100%;
        padding: 0;
        margin: 0;
        position: absolute;
        z-index: 1;
        top: 100%;
        left: -1px;
        border: 1px solid ${({ theme }) => theme.borderColors.light};
        white-space: nowrap;
        font-size: 1em;

        transition: all 300ms linear;
        opacity: ${({ fadeIn }) => fadeIn ? 1 : 0};
        visibility: ${({ fadeIn }) => fadeIn ? 'visible' : 'hidden'};
    }

    & .page{
        padding: ${({ theme }) => theme.padding};
        height: 1.5em;
        border: 1px solid ${({ theme }) => theme.borderColors.light};

        &:hover{
            background: ${({ theme }) => theme.button_bg_hover};
        }
    }
`

export const PagesList = ({ mainPage, subPages }) => {
    const [showList, setShowList] = useState(false);
    const loc = useSelector(state => state.locations.currentLocation);


    return <ElementContainer
        onMouseEnter={() => setShowList(true)}
        onMouseLeave={() => setShowList(false)}
        fadeIn={showList}
    >

        <Link to={mainPage.url} className='link'>
            <PagesMainLabel
                cursorOver={showList}
                active={loc === mainPage.value}
            >

                {mainPage.name}

            </PagesMainLabel>
        </Link>
        <div className="pagesContainer">
            {subPages.map((page, index) => {
                return <div className="page" key={index}>{page.name}</div>
            })}
        </div>

    </ElementContainer >
} 