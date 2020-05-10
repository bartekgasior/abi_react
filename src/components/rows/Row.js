import React from 'react';
import styled from 'styled-components';

const RowContainer = styled.div`
    padding: 0.5em 1em;
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.font_color};
    background-color: ${({ bg }) => bg};

    & > div{
        padding: 1em 1em;
    }

    & .center{
        display: flex;
        justify-content: center;
    }

    & .flex-direction-column{
        flex-direction: column;
    }

    & .justify-content-space-around{
        justify-content: space-around;
    }

    & .center-text{
        text-align: center;
    }

    & .flex-wrap{
        flex-wrap: wrap;
    }

    & .boxShadow{
        border: 1px solid ${({ theme }) => `1px solid ${theme.borderColors.light}`};
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    }

    & .margin-x-1{
        margin: 1em 0;
    }

    & .col-10{
        width: 10%;
    }

    & .col-20{
        width: 20%;
    }

    & .col-30{
        width: 30%;
    }

    & .col-40{
        width: 40%;
    }

    & .col-50{
        width: 50%;
    }

    & .col-60{
        width: 60%;
    }

    & .col-70{
        width: 70%;
    }

    & .col-80{
        width: 80%;
    }

    & .col-90{
        width: 90%;
    }

    & .col-100{
        width: 100%;
    }

    @media(max-width: ${({ theme }) => theme.mediaQueries.md}){
        padding: 1em 1em;

        & .col-md-10, .col-md-20{
            width: 20%;
        }

        & .col-md-30, .col-md-40{
            width: 40%;
        }

        & .col-md-50 {
            width: 50%;
        }
        
        & .col-md-60{
            width: 60%;
        }

        & .col-md-70, .col-md-80{
            width: 80%;
        }

        & .col-md-90, .col-md-100{
            width: 100%;
        }
    }

    @media(max-width: ${({ theme }) => theme.mediaQueries.sm}){
        padding: 1em 1em;

        & .col-sm-10, .col-sm-20, .col-sm-30, .col-sm-40, .col-sm-50, .col-sm-60, .col-sm-70, .col-sm-80,.col-sm-90, .col-sm-100{
            width: 100%;
        }

    }
`

export const Row = (props) =>
    <RowContainer bg={props.bgColor}>
        {props.children}
    </RowContainer>