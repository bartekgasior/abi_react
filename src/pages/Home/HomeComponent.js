import React from 'react';
import styled from 'styled-components';
import { CompanyDescription } from './CompanyDescription';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const HomeComponent = () =>
    <MainContainer>
        <CompanyDescription />
    </MainContainer>