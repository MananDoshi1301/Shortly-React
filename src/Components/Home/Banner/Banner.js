import React from 'react'
import styled from 'styled-components'
import BannerContent from './BannerContent/BannerContent'
import BannerImage from './BannerImage/BannerImage'
import {layout} from 'styled-system'

const Banner = () => {
    const Box = styled.div`        
        display: flex;
        flex-wrap: wrap;
    `
    const FlexContent = styled.div `        
        ${layout}
        @media (min-width: 48em){
            width: 50%;
        }
        @media (max-width: 48em){
            order: 1;
        }
    `;

    const FlexImage = styled.div `        
        ${layout}
        @media (min-width: 48em){
            width: 50%;
        }
        @media (max-width: 48em){
            order: 0;
        }
    `;


    return (
        <div>
            <Box>
                <FlexContent>
                    <BannerContent />
                </FlexContent>
                <FlexImage>
                    <BannerImage />
                </FlexImage>
            </Box>
        </div>
    )
}

export default Banner
