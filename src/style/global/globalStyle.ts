import { createGlobalStyle } from 'styled-components'
import styleReset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${styleReset};

  body {
    font-family: sans-serif;
  }
  

  strong{
		font-weight: bold;
	}
`

export default GlobalStyle
