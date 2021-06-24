import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import logo from '../../../Assets/Images/logo.svg';

const Nav = () => {

    const Nav = styled.nav`
        
    `
    const FlexBetween = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    `

    const Link = styled.a`
        ${color};
        font-weight: 700;
        text-decoration: none;
        font-size: 15px;
    `

    const PageLink = styled(Link) `
        &:hover{
            color:'#35323E';
        }
    `

    const pageLinks = [
        { name: 'Features' },
        { name: 'Pricing' },
        { name: 'Resources' },
    ]

    const userLinks = [
        { name: 'Login' },
        { name: 'Sign Up' },
    ]
    return (
        <div>

            <Nav>
                <FlexBetween>
                    <div>
                        <FlexBetween>
                            <img src={logo} alt="" />
                            <FlexBetween>
                                {pageLinks.map((link, key) => (
                                    <PageLink color={'themeDarkGray'} href='#' key={key}>{link.name}</PageLink>
                                ))}
                            </FlexBetween>
                        </FlexBetween>
                    </div>
                    <FlexBetween>
                        {userLinks.map((link, key) => (
                            <Link color={'themeDarkGray'} href='#' key={key}>{link.name}</Link>
                        ))}
                    </FlexBetween>
                </FlexBetween>
            </Nav>
        </div>
    )
}

export default Nav
