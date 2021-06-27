import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const FooterLinks = () => {

    const Wrapper = styled.div`
        @media (min-width:48em){
            display: flex;
            justify-content: center;
            gap: 80px;
        }
        /* @media (max-width: 48em){
            text-align: center;
            margin-top: 20px;
            margin-bottom: 20px;
        } */
        color: white;
    `
    const LinkTitleWrapper = styled.div`
        font-weight: 700;
    `
    const LinkWrapper = styled.div `
        @media (max-width: 48em){
            text-align: center;
            margin-top: 50px;
            margin-bottom: 20px;
        }
    `

    const LinkItemWrapper = styled.div`
        ${space}
    `

    const LinkItem = styled.div`
        ${space}
        &:hover{
            color: #2ACFCF;
            cursor: pointer;
        }
    `


    const links = [
        { no: 10, title: 'Features', links: ['Link Shortening', 'Branded Links', 'Analytics'] },
        { no: 11, title: 'Resources', links: ['Blog', 'Developers', 'Support',] },
        { no: 12, title: 'Company', links: ['About', 'Our Team', 'Careers', 'Contact'] },
    ]

    return (
        <div>
            <Wrapper>
                {links.map((link) => (
                    <LinkWrapper key={link.no}>
                        <LinkTitleWrapper>{link.title}</LinkTitleWrapper>
                        <LinkItemWrapper mt={3}>
                            {link.links.map((linkItem, key) => (
                                <LinkItem key={key} my={1}>{linkItem}</LinkItem>
                            ))}
                        </LinkItemWrapper>
                    </LinkWrapper>
                ))}
            </Wrapper>
        </div>
    )
}

export default FooterLinks
