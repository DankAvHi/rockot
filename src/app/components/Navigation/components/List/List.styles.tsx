import styled from "styled-components";

export const StyledList = styled.ul<{ $open: boolean }>`
    transition: 0.2s;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;

    @media screen and (max-width: 425px) {
        overflow: hidden;

        width: 0px;

        gap: 8px;

        ${(props) => (props.$open ? "{width: 250px;}" : "")}
    }

    @media screen and (max-width: 375px) {
        ${(props) => (props.$open ? "{width: 210px;}" : "")}
    }
`;
