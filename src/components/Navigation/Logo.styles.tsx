import styled from "styled-components";
import { LogoMin } from "@assets";
import { colors } from "@styles";
import { Button } from "../UI";

export const LogoStyles = {
    Logo: styled(Button)`
        border-radius: 100%;

        padding: 2px;

        background: linear-gradient(${colors.rockotGradientTop} 60%, ${colors.rockotGradientBottom});

        width: 60px;
        height: 60px;

        display: flex;
        justify-content: center;
        align-items: center;
    `,

    LogoImage: styled(LogoMin)`
        border-radius: 100%;

        width: 100%;
        height: 100%;
    `,
};
