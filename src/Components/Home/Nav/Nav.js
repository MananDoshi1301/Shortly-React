import React from 'react';
import styled from 'styled-components';
import { color, space } from 'styled-system';
import logo from '../../../Assets/Images/logo.svg';
import burger from '../../../Assets/Images/hamburger.svg';

const Nav = () => {

    const Nav = styled.nav`
        
    `
    const FlexBetween = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    `

    const NavBrand = styled.img ``

    const Burger = styled.img `
        @media (min-width: 48em) {
            display: none;
        }
    `

    const Link = styled.a`
        ${color}; 
        ${space};
        font-weight: 700;
        text-decoration: none;
        font-size: 15px;
        border-radius: 30px;
        
        @media (max-width: 48em) {
            display: none;
        }
        /* &:hover{
            background-color: #2ACFCF;
            color: white;
        } */

        &:hover {
            background-color: #99E3E4;
            cursor: pointer;
            color: white;
        }
    `

    const PageLink = styled.a `
        font-weight: 700;   
        text-decoration: none;
        font-size: 15px;
        color: #BFBFBF;
        
        @media (max-width: 48em) {
            display: none;
        }
        &:hover{
            color: black;
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
                            <NavBrand src={logo} alt="" />                            
                            <FlexBetween>
                                {pageLinks.map((link, key) => (
                                    <PageLink color={'themeGray.1'} href='#' key={key}>{link.name}</PageLink>
                                ))}
                            </FlexBetween>
                        </FlexBetween>
                    </div>
                    <FlexBetween>
                    <Burger src={burger} />
                        {userLinks.map((link, key) => (
                            <Link p={10} px={20} color={'themeGray.1'} href='#' key={key}>{link.name}</Link>
                        ))}
                    </FlexBetween>
                </FlexBetween>
            </Nav>
        </div>
    )
}

export default Nav
