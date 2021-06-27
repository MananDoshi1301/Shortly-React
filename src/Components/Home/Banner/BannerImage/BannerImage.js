import React from 'react';
import styled from 'styled-components';
import bannerImg from '../../../../Assets/Images/illustration-working.svg';
import { layout } from 'styled-system';

const BannerImage = () => {
    const FluidImg = styled.img `
        max-width: 100%;
        height: auto;        
        ${layout};
    `
    return (
        <div>
            <FluidImg src={bannerImg}/>            
        </div>
    )
}

export default BannerImage
