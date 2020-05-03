import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    cursor: pointer;

    & > img{
        position: absolute;
        z-index: 1;

        transition: all 5s ease-in;
        transition: all 1s ease-out;
        height: ${({ hovered }) => hovered ? '120%' : '100%'};
        width: ${({ hovered }) => hovered ? '120%' : '100%'};
        top: ${({ hovered }) => hovered ? '-10%' : 0};
        left: ${({ hovered }) => hovered ? '-10%' : 0};
    }

    & .desc{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 5%;

        transition: all 5s ease-in;
        transition: all 1s ease-out;
        opacity: ${({ hovered }) => hovered ? '1' : '0.5'};

        color: #FFF;
        font-size: ${({ theme }) => theme.fontSizes.lg};
        font-weight: bold;
    }

    & .fa{
        width: 2em;
        height: 2em;
    }

    @media (max-width: ${({theme}) => theme.mediaQueries.md}) {
       
    }
`

export const ImageBackgroundButton = ({ label, icon, img, alt }) => {
    const [hovered, setHovered] = useState(false);

    return <Container
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        hovered={hovered}
    >
        <img src={img} alt={alt} />
        <div className='desc'>
            <span>{label}</span>
            <span className='fa'>{icon}</span>
        </div>
    </Container>
}