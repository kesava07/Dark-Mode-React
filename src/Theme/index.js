import { ThemeProvider } from "styled-components"
import { GlobalTheme } from "../Components/Styled/StyledGlobal";
import getTheme from "./theme"


const Theme = ({ children, currentTheme }) => {
    const theme = getTheme(currentTheme);
    return <ThemeProvider theme={theme} >
        <GlobalTheme />
        {children}
    </ThemeProvider>
}

export default Theme;
