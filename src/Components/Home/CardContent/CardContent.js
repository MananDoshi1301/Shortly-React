import React from 'react';
import styled from 'styled-components';
import { color, space, layout } from 'styled-system';
import LinkShortener from '../LinkShortener/LinkShortener';
import Cards from './Cards/Cards';

const CardContent = () => {
    const CardContent = styled.div`
        ${color}
        ${space}        
    `
    const CardContentWrapper = styled.div`${space}`

    const Content = styled.div`
        text-align: center;
    `
    const ContentTitle = styled.h1`
        font-weight: 700;
        ${color};
        @media (max-width: 50.375em){
            font-size: 25px;
        }
    `
    const ContentDetails = styled.p`
        ${color};
        ${layout};
        text-align: center;
    `

    return (
        <CardContent bg={'#EFF1F7'} p={0} pb={6}>
            <CardContentWrapper mx={[3, 5, 6]} mt={6}>
                <LinkShortener />
                <Content>
                    <ContentTitle color={'themeBlack.0'}>Advanced Statistics</ContentTitle>
                    <ContentDetails color={'themeGray.1'}>Track how your links are performing across web with our advanced statistics dashboard</ContentDetails>
                </Content>
                <div>
                    <Cards />
                </div>
            </CardContentWrapper>
        </CardContent>
    )
}

export default CardContent
