import React from 'react';
import Nav from './Nav/Nav';
import styled from 'styled-components';
import {space} from 'styled-system'
import Banner from './Banner/Banner';

const Home = () => {

    const Box = styled.div `${space}`

    return (
        <div>
            <Box mx={[3, 5, 6]} my={4}>
                <Nav />
            </Box>
            <Box ml={[3, 5, 6]} my={4}>
                <Banner /> 
            </Box>
        </div>
    )
}

export default Home
