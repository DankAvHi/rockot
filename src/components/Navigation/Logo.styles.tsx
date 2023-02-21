import styled from "styled-components";
import { LogoMin } from "@assets";
import { colors } from "@styles";
import { Button } from "../UI";

export const StyledLogo = styled(Button)`
    border-radius: 100%;

    background: linear-gradient(${colors.rockotGradientTop} 60%, ${colors.rockotGradientBottom});

    width: 60px;
    height: 60px;
`;

export const LogoImage = styled(LogoMin)`
    border-radius: 100%;

    width: 60px;
    height: 60px;
`;
