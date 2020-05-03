import React, { useEffect } from 'react';

import { useLocation } from '../../hooks/useLocation';
import allRoutes from '../../routes';

import styled from 'styled-components';
import { CompanyDescription } from './CompanyDescription';
import { InsuranceDescription } from './InsuranceDescription';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const HomeComponent = () => {
    const loc = useLocation();

    useEffect(() => {
        loc.setLocation(allRoutes.aboutUs.value);
    }, [loc]);

    return <MainContainer>
        <CompanyDescription />
        <InsuranceDescription />
    </MainContainer>
}