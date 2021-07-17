import styled from "styled-components";

export const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 150px;
    grid-gap: 1em;
`