import React from "react";
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from './Components/Home/Home';
import {color} from 'styled-system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Home /> */}
        <div color="themeRed">Theme</div>
      </div>
    </ThemeProvider>

  );
}

export default App;
