import React from 'react';
import Nav from './Nav/Nav';
import styled from 'styled-components';
import {space} from 'styled-system'
import Banner from './Banner/Banner';
import CardContent from './CardContent/CardContent'
import CTAContent from './CTAContent/CTAContent';
import Footer from './Footer/Footer';

const Home = () => {

    const Box = styled.div `${space}`

    const BannerWrapper = styled.div `
        @media (max-width: 48em){
            margin: 32px 16px;
        }

        @media (min-width: 48em){
            margin: 128px;
        }
    `

    return (
        <div>
            <Box mx={[3, 5, 6]} mt={4} mb={5}>
                <Nav />
            </Box>
            <Box my={4}>
                <BannerWrapper>
                    <Banner /> 
                </BannerWrapper>
            </Box>
            <Box>
                <CardContent />
            </Box>
            <Box>
                <CTAContent />
            </Box>
            <Box>
                <Footer />
            </Box>
        </div>
    )
}

export default Home
