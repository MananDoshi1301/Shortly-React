import React from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system';
import brandImg from '../../../Assets/Images/logo_white.svg';
import FooterLinks from './FooterLinks/FooterLinks';
// import FooterLinks from './FooterLinks/FooterLinks';
import SocialLinks from './SocialLinks/SocialLinks';

const Footer = () => {

    const Wrapper = styled.div`        
        ${color}; 
        ${space}
    `;

    const ItemWrapper = styled.div `
        @media(min-width: 48em){
            display: flex;
            justify-content: space-between;
        }
        ${space}
    `

    const BrandWrapper = styled.div`
        @media (max-width: 48em){
            text-align: center;
            /* margin-top: 50px;
            padding-bottom: 20px; */
        }
    `
    const FooterBrand = styled.img`
        fill: #fff;
    `

    const FootLinks = styled.div``

    const SocLinks = styled.div``

    return (
        <div>
            <Wrapper bg={'themeBlack.0'}>
                <ItemWrapper mx={[3, 5, 6]} pt={5} pb={4}>
                    <BrandWrapper>
                        <FooterBrand src={brandImg} />
                    </BrandWrapper>
                    <FootLinks>
                        <FooterLinks />
                    </FootLinks>
                    <SocLinks>
                        <SocialLinks />
                    </SocLinks>
                </ItemWrapper>
            </Wrapper>
        </div>
    )
}

export default Footer
