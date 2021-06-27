import React from "react";
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './theme';
import Home from './Components/Home/Home';
import styled from 'styled-components';

function App() {
  const Box = styled.div`
    
  `

  const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Poppins', sans-serif;  
      overflow-x: hidden;
    }
  `
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle whiteColor />
      <Box>
        <div className="App">
          <Home />
        </div>
      </Box>
    </ThemeProvider>

  );
}

export default App;
