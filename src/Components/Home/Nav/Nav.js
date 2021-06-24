import React from 'react';
import styled from 'styled-components';
import { color, space } from 'styled-system';
import logo from '../../../Assets/Images/logo.svg';

const Nav = () => {

    const Box = styled.div `${space}`
    
    const Nav = styled.nav`
        ${color}
    `
    const FlexBetween = styled.div `
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    const Link = styled.a `
        ${color}
        text-decoration: none;
        font-size: 20px;

        gap: 5;
    `

    const pageLinks = [
        {name:'Features'},
        {name:'Pricing'},
        {name:'Resources'},
    ]

    const userLinks = [
        {name:'Login'},
        {name:'Sign Up'},
    ]
    return (
        <div>
            <Box mx={6} my={4}>
                <Nav>
                    <FlexBetween>
                        <div>
                            <FlexBetween>
                                <img src={logo} alt="" />
                                <FlexBetween>
                                    {pageLinks.map((link, key)=>(
                                        <Link color={'themeGray'} href='#' key={key}>{link.name}</Link>
                                    ))}
                                </FlexBetween>
                            </FlexBetween>
                        </div>
                        <FlexBetween>
                            {userLinks.map((link, key)=>(
                                <Link color={'themeGray'}  href='#' key={key}>{link.name}</Link>
                            ))}
                        </FlexBetween>
                    </FlexBetween>
                </Nav>
            </Box>
        </div>
    )
}

export default Nav
