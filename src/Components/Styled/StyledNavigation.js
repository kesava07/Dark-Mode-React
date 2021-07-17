import styled from 'styled-components';
export const StyledNavigation = styled.nav`
    padding:  ${({ theme }) => theme.spacing(3)}  ${({ theme }) => theme.spacing(9)};
    box-shadow: ${({ theme }) => theme.elevation.shadow};
    background: ${({ theme }) => theme.colors.cardBg};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-sizing: border-box;
    height: ${({ theme }) => theme.spacing(19)};
    display: flex;
    justify-content: space-between;
    align-items: center;
`