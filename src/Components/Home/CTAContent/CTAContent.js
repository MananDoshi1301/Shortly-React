import React from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system';
import backDesktopImg from '../../../Assets/Images/bg-boost-desktop.svg';
import backMobileImg from '../../../Assets/Images/bg-boost-mobile.svg';

const CTAContent = () => {
    const Wrapper = styled.div `
        ${space}
        ${color}
        background-image: url(${backMobileImg});
        @media (min-width: 90em){
            background-image: url(${backDesktopImg});
        }
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        text-align: center;
    `;

    const CTATitle = styled.h1 `
        ${space}
        ${color}
        font-size: 40px;
        color: white;

        @media (max-width: 50.375em){
            font-size: 25px;
        }
    `;

    const CTAButton = styled.button `
        ${space}
        ${color}
        border: none;
        font-size: 20px;
        border-radius: 30px;
        font-weight: 700;
        color: white;

        &:hover {
            background-color: #99E3E4;
            cursor: pointer;
        }
    `;

    return (
        <div>
            <Wrapper bg={'themeViolet'}>
                <CTATitle pt={5}>Boost your links today</CTATitle>
                <CTAButton px={4} py={3} my={4} bg={'themeBlue'}>Get Started</CTAButton>
            </Wrapper>
        </div>
    )
}

export default CTAContent
