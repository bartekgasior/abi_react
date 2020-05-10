import React from 'react';
import styled from 'styled-components';
import { SlidingButton } from '../buttons/SlidingButton';

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    
    color: ${({ theme }) => theme.font_color};

    & .header{
        font-size: ${({ theme }) => theme.fontSizes.md};
        text-align: center;
    }

    & .desc{
        font-size: ${({ theme }) => theme.fontSizes.sm};
        text-align: center;
    }

    @media(max-width: ${({theme})=> theme.mediaQueries.md}){
        & .button{
            text-align: center;
        }
    }
`

const BlocksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    & .block{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        word-break: break-all;

        padding: 0.25em 0.25em;
        margin: 0.5em 0;
        font-size: ${({ theme }) => theme.fontSizes.md};
        border: ${({ theme }) => `1px solid ${theme.borderColors.light}`};
        border-radius: 5px;
        cursor: default;

        &:hover{
            color: ${({ theme }) => theme.font_color_hover};
        }
    }
`

export const InsuranceAdvantageDescription = ({ h1, desc }) =>
    <DescriptionContainer>
        <span className='header'>{h1}</span>
        <span className='desc'>{desc}</span>

        <BlocksContainer>
            <span className='block col-md-100 col-40'> text1text1text1text1 </span>
            <span className='block col-md-100 col-40'> text2text2text2 </span>
            <span className='block col-md-100 col-40'> text3text3text3 text3text3text3 </span>
            <span className='block col-md-100 col-40'> text4 text4 text4 </span>
        </BlocksContainer>

        <div className='button col-100'>
            <SlidingButton desc='desc' />
        </div>
    </DescriptionContainer>