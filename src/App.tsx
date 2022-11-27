import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { CyclesContextProvider } from './context/CyclesContext'
import { useState } from 'react'

import { DefaultTheme } from './styles/themes/default'
import { LightTheme } from './styles/themes/light'

function App() {
  const [theme, setTheme] = useState(DefaultTheme)

  function toggleTheme() {
    setTheme(theme.title === 'dark' ? LightTheme : DefaultTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router toggleTheme={toggleTheme} />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
