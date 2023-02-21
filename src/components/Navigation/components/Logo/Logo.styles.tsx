import Image from "next/image";
import styled from "styled-components";
import colors from "../../../../styles/colors.styles";
import Button from "../../../UI/Buttons/Button/Button";

export const StyledLogo = styled(Button)`
    border-radius: 100%;

    background: linear-gradient(${colors.rockotGradientTop} 60%, ${colors.rockotGradientBottom});

    width: 60px;
    height: 60px;
`;

export const LogoImage = styled(Image)`
    border-radius: 100%;

    width: 60px;
    height: 60px;
`;