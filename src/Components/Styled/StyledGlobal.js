import { createGlobalStyle } from 'styled-components'

export const GlobalTheme = createGlobalStyle`
body{
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textColor};
    position: relative;
}
`