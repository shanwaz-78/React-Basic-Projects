import React from 'react'
import Home from './Components/Home'
import { ThemeProvider } from './context/ThemeContext.js';

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App
