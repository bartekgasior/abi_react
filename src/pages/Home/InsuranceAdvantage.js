import React from 'react';
import styled from 'styled-components';
import { Row } from '../../components/rows/Row'
import { ImageButtonDescription } from '../../components/descriptions/ImageButtonDescrption';
import { InsuranceAdvantageDescription } from '../../components/descriptions/InsuranceAdvantageDescription';

import erieLogo from '../../icons/logos/erieLogo.png';

const Container = styled.div`
    display: flex;
    flex-direction: row;

    @media(max-width: ${({ theme }) => theme.mediaQueries.md}){
        flex-direction: column;
    }
`

export const InsuranceAdvantage = () =>
    <Row>
        <div className='col-md-100 col-80'>
            <Container>
                <div className='col-md-100 col-30'>
                    <ImageButtonDescription
                        img={erieLogo}
                        h1={'Lorem Ipsum is simply dummy text.'}
                        desc={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    />
                </div>
                <div className='col-md-100 col-70'>
                    <InsuranceAdvantageDescription
                        h1={'Lorem Ipsum is simply dummy text.'}
                        desc={"Lorem Ipsum has been the industry's standard dummy."}
                    />
                </div>
            </Container>
        </div>
    </Row>
