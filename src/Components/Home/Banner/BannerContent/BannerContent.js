import React from 'react'
import styled from 'styled-components'
import { color, layout, space, typography } from 'styled-system'

const BannerContent = () => {
    const Content = styled.div`
        ${layout}
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;        
        @media (max-width: 48em){
            align-items: center;
            text-align: center;
            margin: auto;
        }
    `
    const ContentHeader = styled.div`
        ${color}
        ${layout};
        ${typography}
        font-size: 70px;
        font-weight: 700;        
        
        @media (max-width:70em){
            font-size: 60px;
        }

        @media (max-width:48em){
            font-size: 60px;
        }

        @media (max-width:38em){
            font-size: 45px;
        }
    `

    const ContentDetail = styled.div`
        ${color}
        ${layout}
        ${typography}
        ${space}        
    `

    const ContentButton = styled.button `
        ${color}
        ${layout}
        ${typography}
        ${space}       
        border-radius: 40px;
        font-size: 20px;
        border: none;
        align-self: flex-start;
        padding: 15px;

        @media (max-width: 48em){
            align-self: center;
        }

        &:hover {
            background-color: #99E3E4;
            cursor: pointer;
        }
    `

    return (
        <>
            <Content width={{_:3/4, sm:1}} className={'content'}>
                <ContentHeader color={'themeBlack.0'}>
                    More than just shorter links
                </ContentHeader>
                <ContentDetail color={'themeGray.1'} mt={[0, 1, 2]}>
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </ContentDetail>
                <ContentButton bg={'themeBlue'} color={'white'} fontWeight={700} py={10} mt={[2, 3, 4]}>
                    Get Started
                </ContentButton>
            </Content>
        </>
    )
}

export default BannerContent
