import Link from "next/link";
import styled from "styled-components";
import colors from "../../../../../../../styles/colors.styles";

export const StyledLink = styled.li`
    @media screen and (max-width: 425px) {
        max-height: 30px;
    }
`;
export const StyledNextLink = styled(Link)<{ $active: boolean; $open: boolean }>`
    transition: 0.5s;

    &:hover {
        color: ${colors.rockotGradientBottom};
    }

    ${(props) => (props.$active ? `{color: ${colors.rockotGradientTop}}` : "")}

    @media screen and (max-width: 425px) {
        font-size: 0.5rem;

        ${(props) => (props.$open ? `{font-size: 0.8rem;}` : "")}
    }

    @media screen and (max-width: 375px) {
        ${(props) => (props.$open ? `{font-size: 0.7rem;}` : "")}
    }
`;
