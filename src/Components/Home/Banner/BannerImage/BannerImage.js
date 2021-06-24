import React from 'react';
import styled from 'styled-components';
import bannerImg from '../../../../Assets/Images/illustration-working.svg';

const BannerImage = () => {
    const FluidImg = styled.img `
        max-width: 100%;
        height: auto;        
    `
    return (
        <div>
            <FluidImg src={bannerImg}/>            
        </div>
    )
}

export default BannerImage
