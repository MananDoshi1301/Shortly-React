import React from "react";
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from './Components/Home/Home';
import styled from 'styled-components';

function App() {
  const Box = styled.div `
    font-family: 'Poppins', sans-serif;
  `
  return (
    <ThemeProvider theme={theme}>
      <Box>
      <div className="App">
        <Home />        
      </div>
      </Box>
    </ThemeProvider>

  );
}

export default App;
