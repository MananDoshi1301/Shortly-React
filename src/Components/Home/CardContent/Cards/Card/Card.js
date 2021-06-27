import React from 'react'
import styled from 'styled-components'
import { layout, color, space } from 'styled-system'

const Card = ({ logo, title, content, topMargin }) => {

    const CardWrapper = styled.div`
        ${layout};        
        ${space}; 
        background-color: white;
        border-radius: 10px;             
        @media (max-width: 50.375em){
            margin-top: 80px;
        }
    `

    const CardContentWrapper = styled.div`
        ${layout};        
        ${space};         
    `

    const LogoWrapper = styled.div`
        background-color: #3B3054;        
        border-radius:50%;        
        height: 80px;
        width: 80px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;
        top: -40px;

        @media (max-width: 50.375em){
            margin: auto;
        }
    `

    const CardLogo = styled.img`        
        height: 40px;
    `

    const CardTitle = styled.div`
        font-size: 25px;
        font-weight: 700;
        ${space}
        ${color}

        @media (max-width: 50.375em){
            text-align: center;
        }
    `

    const CardContent = styled.div`
        ${color}
        ${space}
        @media (max-width: 50.375em){
            text-align: center;
        }
    `

    return (
        <div>
            <CardWrapper mt={topMargin}>
                <CardContentWrapper mx={4} pb={3}>
                    <LogoWrapper>
                        <CardLogo src={logo} />
                    </LogoWrapper>
                    <CardTitle color={'themeBlack.0'}>{title}</CardTitle>
                    <CardContent color={'themeGray.0'} my={3}>{content}</CardContent>
                </CardContentWrapper>
            </CardWrapper>
        </div>
    )
}

export default Card
