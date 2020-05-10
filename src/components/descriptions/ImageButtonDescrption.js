import React from 'react';
import styled from 'styled-components';
import { SlidingButton } from '../buttons/SlidingButton';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 1em;

    & > img{
        width: 100%;
    }

    & .header{
        font-size: ${({ theme }) => theme.fontSizes.md};
        padding: 0.5em 0.5em;
    }

    & .desc{
        padding: 0.5 0;
    }

    @media(max-width: ${({ theme }) => theme.mediaQueries.md}){
        align-items: center;

        & > img{
            width: 50%;
        }
    }
`

export const ImageButtonDescription = ({ img, h1, desc, buttonLabel }) =>
    <Container>
        <img src={img} alt='img' />
        <div className='header'>
            {h1}
        </div>
        <div className='desc'>
            {desc}
        </div>
        <SlidingButton desc='desc' />
    </Container>