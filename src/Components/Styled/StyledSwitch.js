import styled from "styled-components";

const StyledThemeSwitch = styled.div`
& .switch {
      display: inline-block;
      width: 60px;
      height: 28px;
      position: relative;
    .toggle-thumb {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #475569;
        border-radius: 40px;
        cursor: pointer;
       }
    .toggle-thumb:before {
        content: "";
        height: 20px;
        width: 20px;
        position: absolute;
        left: 4px;
        bottom: 4px;
        border-radius: 50%;
        background-color: #E2E8F0;
        transition: .4s all ease;
        z-index: 100;
    }
    .toggle-thumb span.sun{
        position: relative;
        left: 8px;
        font-size: 14px;
    }
    .toggle-thumb span.moon{
        position: relative;
        right: 8px;
        font-size: 14px;
    }
    .checkbox {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .checkbox:checked + .toggle-thumb:before {
      transform: translateX(32px);
    }
    }
`

export const ThemeSwitch = ({toggleTheme, currentTheme}) => {
    return (
        <StyledThemeSwitch>
            <label className="switch">
                <input onChange={toggleTheme} checked={currentTheme === 'light'} type="checkbox" className="checkbox" />
                <span className="toggle-thumb">
                    <span className="sun">🌞</span>
                    <span className="moon">🌜</span>
                </span>
            </label>
        </StyledThemeSwitch>
    )
}