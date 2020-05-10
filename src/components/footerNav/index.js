import React from 'react';
import allRoutes from '../../routes';
import { Row } from '../rows/Row';
import styled from 'styled-components';

const NavContainer = styled.div`
    position: absolute;
    z-index: 10;
    bottom: 5em;
    left: 0;
    height: 12em;
    width: 100%;
    padding: 0;
    background: ${({ theme }) => theme.navbar_bg};    

    & > div{
        padding: 0;
        height: 100%;
        width: 100%;
    }

    @media(max-width: ${({ theme }) => theme.mediaQueries.md}){
      height: 24em;
  }
`

const RowContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    padding: 0 !important;

    & > div{
        margin: 0.5em 0;
        padding: 0 1em;
        height: calc(100% - 1em);
        border: ${({ theme }) => `1px solid ${theme.borderColors.light}`} ;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    & span{
        padding-bottom: 0.25em;
        cursor: pointer;
        text-align: center;
    }

    & .main{
        font-weight: bold;
    }

    & .sub{
        font-size: 0.75em;

        &:hover{
            color: ${({ theme }) => theme.font_color_hover};
        }
    }

    @media(max-width: ${({ theme }) => theme.mediaQueries.md}){
        & > div{
            font-size: 0.9em;
            height: calc(50% - 2em);
            padding: 1em 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            border: 0;
        }

        & span{
            padding: 0;
        }

        & .sub{
            padding: 0.4em;
            font-size: 0.9em;
        }
    }
`
export const FooterNav = () =>
    <NavContainer>
        <Row>
            <RowContainer>
                <div className='col-md-50 col-20'>
                    <span className='main'>{allRoutes.aboutUs.name}</span>
                    {allRoutes.aboutUs.sub.map(page => {
                        return <span key={page.url} className='sub'>{page.name}</span>
                    })}
                </div>
                <div className='col-md-50 col-20'>
                    <span className='main'>{allRoutes.personalInsurance.name}</span>
                    {allRoutes.personalInsurance.sub.map(page => {
                        return <span key={page.url} className='sub'>{page.name}</span>
                    })}
                </div>
                <div className='col-md-50 col-20'>
                    <span className='main'>{allRoutes.businessInsurance.name}</span>
                    {allRoutes.businessInsurance.sub.map(page => {
                        return <span key={page.url} className='sub'>{page.name}</span>
                    })}
                </div>
                <div className='col-md-50 col-20'>
                    <span className='main'>{allRoutes.contact.name}</span>
                    {allRoutes.contact.sub.map(page => {
                        return <span key={page.url} className='sub'>{page.name}</span>
                    })}
                </div>
            </RowContainer>
        </Row>
    </NavContainer>
