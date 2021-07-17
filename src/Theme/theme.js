import { lightThemeColors, darkThemeColors } from './Utils/colors';
import { lightElevations, darkElevations } from './Utils/elevations';
import { breakpoints } from './Utils/breakpoints';
import { getSpacing } from './Utils/spacing';

const getTheme = (themeType = 'light') => {
    const theme = {
        colors: themeType === 'light' ? lightThemeColors : darkThemeColors,
        elevation: themeType === 'light' ? lightElevations : darkElevations,
        breakpoints: breakpoints,
        spacing: getSpacing,
    }
    return theme;
}

export default getTheme