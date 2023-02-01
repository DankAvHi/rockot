import styled from "styled-components";
import stylesVariables from "../../../styles/variables.styles";

export const StyledNavigation = styled.nav<{ $opacity: boolean }>`
    position: sticky;
    top: 0;
    z-index: 1;

    border-bottom: 1px solid #ffffff;

    background-color: ${stylesVariables.appBackgroundColor};

    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) => (props.$opacity ? "opacity: 0.9;" : "")}

    @media screen and (max-width: 425px) {
        position: fixed;
        top: 10px;
        right: 10px;

        border: none;

        background-color: transparent;

        justify-content: flex-end;
    }
`;

export const Container = styled.div<{ $open: boolean }>`
    padding: 8px 12px;

    max-width: 1440px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 425px) {
        border-radius: 12px;

        padding: 10px;

        background-color: ${stylesVariables.appBackgroundColor};
        opacity: 0.75;

        flex-direction: row-reverse;

        ${(props) => (props.$open ? `{opacity: 1; gap: 12px;}` : "")}
    }
`;
