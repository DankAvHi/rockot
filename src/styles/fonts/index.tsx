import { css } from "styled-components";
import { centuryGothicFontMixin, centuryGothicFontName } from "./centuryGothic.font";
import { oswaldFontMixin, oswaldFontName } from "./oswald.font";
import { rawhideRawFontMixin, rawhideRawFontName } from "./rawhideRaw.font";

export const fontsMixins = css`
    ${centuryGothicFontMixin}
    ${oswaldFontMixin}
    ${rawhideRawFontMixin}
`;

export const fontsNames = {
    centuryGothicFontName,
    oswaldFontName,
    rawhideRawFontName,
};

export const fonts = { mixins: fontsMixins, names: fontsNames };
