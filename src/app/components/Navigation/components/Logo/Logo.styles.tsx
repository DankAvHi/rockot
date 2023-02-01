import Image from "next/image";
import styled from "styled-components";
import Button from "../../../UI/Buttons/Button/Button";

export const StyledLogo = styled(Button)`
    width: 60px;
    height: 60px;

    @media screen and (max-width: 425px) {
        width: 50px;
        height: 50px;
    }
`;

export const LogoImage = styled(Image)`
    width: 60px;
    height: 60px;

    @media screen and (max-width: 425px) {
        width: 50px;
        height: 50px;
    }
`;
