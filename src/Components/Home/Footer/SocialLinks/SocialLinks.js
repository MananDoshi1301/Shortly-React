import React from 'react'
import fbImg from '../../../../Assets/Images/icon-facebook.svg'
import twitImg from '../../../../Assets/Images/icon-twitter.svg'
import pinImg from '../../../../Assets/Images/icon-pinterest.svg'
import igImg from '../../../../Assets/Images/icon-instagram.svg'
import styled from 'styled-components'

const SocialLinks = () => {
    const icons = [fbImg, twitImg, pinImg, igImg]
    
    const Wrapper = styled.div ` 
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        @media (max-width: 48em){
            text-align: center;
            margin-top: 50px;
            padding-bottom: 20px;
        }
    `

    const IconWrapper = styled.div ``
    const Icon = styled.img `
        &:hover{
            fill: #2ACFCF;
            cursor: pointer;
        }
    `

    return (
        <div>
            <Wrapper>
                {icons.map((icon, key)=>(
                    <IconWrapper key={key}>
                        <Icon src={icon} />
                    </IconWrapper>
                ))}
            </Wrapper>
        </div>
    )
}

export default SocialLinks
