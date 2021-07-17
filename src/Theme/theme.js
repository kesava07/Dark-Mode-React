import { lightThemeColors, darkThemeColors } from './Utils/colors';
import { lightElivations, darkElivations } from './Utils/elivations';
import { breakpoints } from './Utils/breakpoints';
import { getSpacing } from './Utils/spacing';

const getTheme = (themeType = 'light') => {
    const theme = {
        colors: themeType === 'light' ? lightThemeColors : darkThemeColors,
        elivation: themeType === 'light' ? lightElivations : darkElivations,
        breakpoints: breakpoints,
        spacing: getSpacing,
    }
    return theme;
}

export default getTheme