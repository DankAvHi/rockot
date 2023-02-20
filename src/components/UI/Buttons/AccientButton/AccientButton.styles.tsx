import styled from "styled-components";
import colors from "../../../../styles/colors.styles";
import { Button } from "../Button";

export const StyledAccientButton = styled(Button)`
    transition: 0.4s;

    border-radius: 12px;

    padding: 12px 32px;

    background-color: ${colors.rockotGradientBottom};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: 1.5rem;
    font-weight: 500;

    &:hover {
        box-shadow: 0 0 20px ${colors.rockotGradientTop};

        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }

    @media screen and (max-width: 1024px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 768px) {
        &:hover {
            box-shadow: none;

            transform: none;
        }

        &:active {
            box-shadow: 0 0 20px ${colors.rockotGradientTop};

            transform: scale(1.1);
        }
    }

    @media screen and (max-width: 425px) {
        font-size: 1rem;
        font-weight: 300;
    }
`;
