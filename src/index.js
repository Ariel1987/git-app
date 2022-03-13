import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { GithubDataProvider } from './context/githubData'
import GlobalStyles from './styles/GlobalStyles'
import { theme } from './styles/Theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GithubDataProvider>
        <GlobalStyles />
        <App />
      </GithubDataProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
