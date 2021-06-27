import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import { color, layout, space, border } from 'styled-system';
import backDesktopImg from '../../../Assets/Images/bg-shorten-desktop.svg';
import backMobileImg from '../../../Assets/Images/bg-shorten-mobile.svg';
import ResultDiv from './ResultDiv/ResultDiv';

const LinkShortener = () => {
    const InputDiv = styled.div `
        ${layout}
        ${space}
        ${color}
        

        position: relative;
        top: -50px;
        @media (min-width: 50.37em){
            background-image: url(${backDesktopImg});
        }
        background-image: url(${backMobileImg});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        border-radius: 10px;        
    `

    const InputWrapper = styled.div `
        ${space};
        padding: 30px;

        @media (min-width: 50.37em){
            display: flex;
            justify-content: space-around;
            /* align-items: center; */
            gap: 30px;
        }

        @media (max-width: 50.37em){
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-wrap: nowrap;
            gap: 20px;
        }

    `

    const Wrapper = styled.div `
        width: 100%;
    `

    const ErrorText = styled.div `
        ${color};
        ${space};
        font-style: italic;
    `

    const Input = styled.input `
        ${layout};
        ${border};

        padding: 10px;
        width: 100%;

        font-weight: 600;
        font-size: 16px;
        border-radius: 10px;
        color: #9E9AA7;          

        &:focus{
           outline : none;
        }

        &::placeholder{            
            font-weight: 600;
            font-size: 16px;
            color: #9E9AA7;  
            /* padding: 15px; */
        }

            
        @media (max-width: 50.37em){            
            padding: 10px;            
        }
    `    

    const InputButton = styled.button `
        ${layout}
        ${color}
        ${space}

        padding: 15px;                 
        width: 15%;
        align-self: flex-start;

        display: block;
        border-radius: 10px;

        border: none;
        font-weight: 700;  
        @media (max-width: 50.37em){
            display: block;
            width: 100%;
        }      

        &:hover {
            background-color: #99E3E4;
            cursor: pointer;
        }
    `

    const ResultWrapper = styled.div `
        ${space}
        position: relative;
        top:-30px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    `

    const [result, setResult] = useState(JSON.parse(localStorage.getItem('linkresults')));    
    const [isError, setIsError] = useState(false);
    // localStorage.setItem('linkresults', JSON.stringify([]));
    // console.log(JSON.parse(localStorage.getItem('linkresults')))
    const ref = useRef(null);

    const fetchResult = (link, result) => {
        if(localStorage.getItem('linkresults') === null){
            const obj = {link, result};
            const arr = [obj];
            localStorage.setItem('linkresults', JSON.stringify(arr));
            console.log(localStorage.getItem('linkresults'));
            setResult(arr);
        }
        else{
            const arr = JSON.parse(localStorage.getItem('linkresults'));
            // console.log(arr);
            const obj = {link, result};
            const newArr = [...arr, obj];
            localStorage.setItem('linkresults', JSON.stringify(newArr));
            console.log(localStorage.getItem('linkresults'));
            setResult(newArr);
        }        
    }

    const fetchShortLink = async() => {
        if(ref.current.value !== ''){            
            try{                
                const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${ref.current.value}`);                                            
                const obj = await result.json();                
                await console.log(obj.result.full_short_link)
                await fetchResult(ref.current.value, obj.result.full_short_link);
            }
            catch{
                console.log('Error in fetching...')
            }            
        }
        else{
            console.log('Error empty')
            setIsError(true);
            setTimeout(()=>{setIsError(false)}, 4000);
        }
    }

    const trimResult = () => {
        if(result.length > 3){
            setResult(result.slice(result.length - 3))
        }
    }

    return (
        <div>
            <InputDiv bg={'themeViolet'}>
                <InputWrapper>
                    <Wrapper style={{width:'100%'}}>
                        <Input ref={ref}
                            border={'4px solid'} borderColor={isError?'themeRed':'white'} 
                            placeholder='Shorten a link here...' />
                        {isError && <ErrorText color={'themeRed'} mt={'1'}>Please add a link</ErrorText>}
                    </Wrapper>
                    <InputButton onClick={()=>fetchShortLink()} bg={'themeBlue'} color={'white'}>Shorten It!</InputButton>
                </InputWrapper>
            </InputDiv>
            <ResultWrapper mb={5}>
                {result && trimResult()}
                {result && result.map((res, key)=>(
                    <ResultDiv key={key} link={res.link} result={res.result} />
                ))}                
            </ResultWrapper>
        </div>
    )
}

export default LinkShortener
