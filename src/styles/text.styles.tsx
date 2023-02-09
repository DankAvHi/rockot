import { css } from "styled-components";
import colors from "./colors.styles";

export const accientTextMixin = css`
    color: ${colors.rockotGradientTop};
`;

const textMixins = { accientTextMixin };

export default textMixins;
