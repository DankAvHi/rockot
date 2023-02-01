import { css } from "styled-components";

export const rawhideRawFontMixin = css`
    @font-face {
        font-family: "Rawhide Raw";
        src: url("/fonts/RawhideRaw/RawhideRaw.otf") format("truetype");
    }
`;

export const rawhideRawFontName = "Rawhide Raw";

const rawhideRawFont = { name: rawhideRawFontName, mixin: rawhideRawFontMixin };

export default rawhideRawFont;
