import React from 'react';
import allRoutes from '../../routes';
import { Row } from '../rows/Row';
import styled from 'styled-components';

const NavContainer = styled.div`
    position: absolute;
    z-index: 1;
    bottom: 5em;
    left: 0;
    height: 15em;
    width: 100%;
    padding: 0;
    background: ${({ theme }) => theme.navbar_bg};    

    & > div{
        padding: 0;
        height: 100%;
        width: 100%;
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
        font-size: 0.9em;
    }

    @media(max-width: ${({ theme }) => theme.mediaQueries.md}){
        flex-direction: column;
        & > div{
            font-size: 0.9em;
            height: calc(25% - 2px);
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            border-top: 0;
            border-right: 0;
            border-left: 0;
            border-bottom: ${({ theme }) => `1px solid ${theme.borderColors.light}`} ;
        }

        & span{
            padding: 0;
        }

        & .sub{
            padding: 0.4em;
        }
    }
`
export const FooterNav = () =>
    <NavContainer>
        <Row>
            <RowContainer>
                <div className='col-md-100 col-20'>
                    <span className='main'>{allRoutes.aboutUs.name}</span>
                    {allRoutes.aboutUs.sub.map(page => {
                        return <span className='sub'>{page.name}</span>
                    })}
                </div>
                <div className='col-md-100 col-20'>
                    <span className='main'>{allRoutes.personalInsurance.name}</span>
                    {allRoutes.personalInsurance.sub.map(page => {
                        return <span className='sub'>{page.name}</span>
                    })}
                </div>
                <div className='col-md-100 col-20'>
                    <span className='main'>{allRoutes.businessInsurance.name}</span>
                    {allRoutes.businessInsurance.sub.map(page => {
                        return <span className='sub'>{page.name}</span>
                    })}
                </div>
                <div className='col-md-100 col-20'>
                    <span className='main'>{allRoutes.contact.name}</span>
                    {allRoutes.contact.sub.map(page => {
                        return <span className='sub'>{page.name}</span>
                    })}
                </div>
            </RowContainer>
        </Row>
    </NavContainer>
