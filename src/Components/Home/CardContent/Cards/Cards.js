import React from 'react';
import Card from './Card/Card';
import brImg from '../../../../Assets/Images/icon-brand-recognition.svg';
import drImg from '../../../../Assets/Images/icon-detailed-records.svg';
import fcImg from '../../../../Assets/Images/icon-fully-customizable.svg';
import styled from 'styled-components';
import { color, layout, space } from 'styled-system';

const Cards = () => {
    const cardProps = [
        { logo: brImg, title: 'Brand Recognition', content: 'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links helps intil confidence in your content' },
        {logo:drImg, title:'Detailed Records', content:'Gain insights into who is clicking your links. Knowing when and here people engage ith your content helps inform better decisions'},
        {logo:fcImg, title:'Fully Customizable', content:'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement'},
    ];

    const CardsWrapper = styled.div`
        
    `

    const Wrapper = styled.div `
        ${layout}
        @media (min-width: 50.375em){
            display: flex;
            justify-content: space-between;            
        }
        ${space}
    `

    const BorderFragment = styled.span `
        ${color}
            
        @media (min-width: 50.375em){
            height: 10px;
            width: 10%;            

            position: relative;
            top: 150px;        
        }

        @media (max-width: 50.375em){
            position: absolute;
            left: 48.5%;            
            height: 45px;
            width: 3%;        
        }
    `
    
    return (
        <div>
            <CardsWrapper>
                <Wrapper mt={6}>
                    {cardProps.map((card, key)=>(
                        <React.Fragment key={key}>
                            <Card logo={card.logo} title={card.title} content={card.content} topMargin={key*50} />
                            {key<2 && <BorderFragment bg={'themeBlue'} />}
                        </React.Fragment>
                    ))}                                                            
                </Wrapper>                
            </CardsWrapper>
        </div>
    )
}

export default Cards
