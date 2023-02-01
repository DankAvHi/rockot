import { css } from "styled-components";

export const centuryGothicFontMixin = css`
    @font-face {
        font-family: "Century Gothic";
        src: url("/fonts/CenturyGothic/centurygothic.ttf");
    }
    @font-face {
        font-family: "Century Gothic";
        src: url("/fonts/CenturyGothic/centurygothic_bold.ttf");
        font-weight: 700;
    }
`;

export const centuryGothicFontName = "Century Gothic";

const centuryGothicFont = { name: centuryGothicFontName, mixin: centuryGothicFontMixin };

export default centuryGothicFont;
