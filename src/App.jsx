import React, { useEffect, useState } from 'react'
import { StyledNavigation } from './Components/Styled/StyledNavigation';
import { StyledRootApp } from './Components/Styled/StyledRootApp';
import { ThemeSwitch } from './Components/Styled/StyledSwitch';
import Users from './Features/Users';
import Theme from './Theme'

export default function App() {
  const localTheme = localStorage.theme
  const [currentTheme, setCurrentTheme] = useState(localTheme ? localTheme : 'light');
  const handleTheme = () => {
    if (currentTheme === 'light') return setCurrentTheme('dark');
    setCurrentTheme('light');
  }
  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);
  return (
    <Theme currentTheme={currentTheme}>
      <StyledNavigation>
        <div>
          <p>Link</p>
        </div>
        <div>
          <ThemeSwitch toggleTheme={handleTheme} currentTheme={currentTheme} />
        </div>
      </StyledNavigation>
      <StyledRootApp>
        <Users />
      </StyledRootApp>
    </Theme>
  )
}
