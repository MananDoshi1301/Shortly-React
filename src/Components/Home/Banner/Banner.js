import React from 'react'
import styled from 'styled-components'
import BannerContent from './BannerContent/BannerContent'
import BannerImage from './BannerImage/BannerImage'
import {width } from 'styled-system'

const Banner = () => {
    const Box = styled.div`        
        display: flex;
        flex-wrap: wrap;
    `
    const FlexItem = styled.div `
        ${width}
    `;

    return (
        <div>
            <Box>
                <FlexItem width={[1, 1]}>
                    <BannerContent />
                </FlexItem>
                <FlexItem width={[1, 1]}>
                    <BannerImage />
                </FlexItem>
            </Box>
        </div>
    )
}

export default Banner
