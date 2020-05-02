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
                <FormattedMessage id='about_company' values={{ br: <br /> }} />
            </div>
        </div>
    </Row>