import React, { useState } from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system'

const ResultDiv = ({ link, result }) => {
    const ResultDiv = styled.div`
        ${space}
        @media (min-width: 50.37em){
            background-color: white;
            border-radius: 5px;                
        }
    `
    const Wrapper = styled.div`        
        @media (min-width: 50.37em){
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;

            padding: 16px 32px;            
        }
        @media (max-width: 50.37em){
            display: flex;
            justify-content: space-between;            
            flex-direction: column;
            gap: 1px;
        }
    `;

    const Link = styled.div`
        @media (max-width: 50.37em){
            padding: 16px 32px;   
            background-color: white;
            border-radius: 5px 5px 0 0;
        }

        @media (max-width: 40em){
            font-size: 10px;
        }
    `    
    
    const ResultWrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;        

        @media (max-width: 50.37em){
            display: flex;
            justify-content: space-between;            
            flex-direction: column;            
            align-items: flex-start;
            gap: 10px;

            padding: 16px 32px;       
            background-color: white;
            border-radius: 0 0 5px 5px ;
        }
    `
    const ResultLink = styled.div`
        ${color}
        @media (max-width: 40em){
            font-size: 10px;
        }
    `

    const CopyButton = styled.button`
        ${space}
        ${color}
        border-radius: 5px;
        border: none;
        font-weight: 700;

        @media (max-width: 50.37em){
            display: block;
            width: 100%;
        }
    `
    const [isCopied, setIsCopied] = useState(false);
    return (
        <div>
            <ResultDiv>
                <Wrapper p={3} px={4}>
                    <Link>{link}</Link>                    
                    <ResultWrapper>
                        <ResultLink color={'themeBlue'}>{result}</ResultLink>
                        <CopyButton onClick={() => {
                            navigator.clipboard.writeText(result);
                            setIsCopied(true)
                            setTimeout(() => { setIsCopied(false) }, (3000))
                        }} p={2} px={3} bg={!isCopied ? 'themeBlue' : 'themeViolet'} color={'white'}>{!isCopied ? 'Copy' : 'Copied!'}</CopyButton>
                    </ResultWrapper>
                </Wrapper>
            </ResultDiv>
        </div>
    )
}

export default ResultDiv
