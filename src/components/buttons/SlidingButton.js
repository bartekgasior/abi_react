import React, { useState } from 'react';
import styled from 'styled-components';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SlidingButtonContainer = styled.button`
    background-color: ${({ theme }) => theme.button_bg};
    margin-top: 1em;
    margin-left: 1em;
    margin-right: 1em;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.font_color};
    cursor: pointer;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    min-width: 150px;
    .arrow{
        position: absolute;
        top: 12.5%;
        
        width: 20px;
        height: 75%;

        transition: all 0.5s ease-in-out;
        right: ${({ hovered }) => hovered ? '10%' : '-10%'};
        visibility: ${({hovered}) => hovered ? 'visible' : 'hidden'};
    }
    &:hover{
        background-color: ${({ theme }) => theme.button_bg_hover};
        color: ${({ theme }) => theme.font_color_hover};
    }
`

export const SlidingButton = ({ desc }) => {
    const [hovered, setHovered] = useState(false);

    return <SlidingButtonContainer
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        hovered={hovered}
    >
        {desc}
        <FontAwesomeIcon icon={faArrowRight} className='arrow' />
    </SlidingButtonContainer>
}
