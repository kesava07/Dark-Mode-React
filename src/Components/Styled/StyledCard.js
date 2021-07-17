import styled from "styled-components";


export const StyledCard = styled.div`
background: ${({ theme }) => theme.colors.cardBg};
color: ${({ theme }) => theme.colors.textColor};
padding: ${({ theme }) => theme.spacing(4)};
box-shadow: ${({ theme }) => theme.elivation.shadow};
border-radius:  ${({ theme }) => theme.spacing(2)};
`