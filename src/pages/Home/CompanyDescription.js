import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row } from '../../components/rows/Row'
import styled from 'styled-components';
import logo from '../../icons/logos/logo.png';

const Logo = styled.img`
    width: 200px;
    height: 200px;

    @media(max-width: ${({ theme }) => theme.mediaQueries.sm}){
        width: 150px;
        height: 150px;
    }
`

export const CompanyDescription = () =>
    <Row>
        <div className='col-sm-100 col-md-80 col-70'>
            <div className='col-100 center'>
                <Logo src={logo} alt='logo' />
            </div>
            <div className='center-text'>
                <h3><FormattedMessage id='about_company' /></h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                t has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    </Row>