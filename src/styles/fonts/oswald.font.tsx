import { css } from "styled-components";

export const oswaldFontMixin = css`
    @font-face {
        font-family: oswald;
        src: url("/fonts/Oswald/static/Oswald-ExtraLight.ttf");
        font-weight: 200;
    }

    @font-face {
        font-family: oswald;
        src: url("/fonts/Oswald/static/Oswald-Light.ttf");
        font-weight: 300;
    }

    @font-face {
        font-family: oswald;
        src: url("/fonts/Oswald/static/Oswald-Regular.ttf");
        font-weight: 400;
    }

    @font-face {
        font-family: oswald;
        src: url("/fonts/Oswald/static/Oswald-Medium.ttf");
        font-weight: 500;
    }

    @font-face {
        font-family: oswald;
        src: url("/fonts/Oswald/static/Oswald-SemiBold.ttf");
        font-weight: 600;
    }

    @font-face {
        font-family: oswald;
        src: url("/fonts/Oswald/static/Oswald-Bold.ttf");
        font-weight: 700;
    }
`;

export const oswaldFontName = "oswald";

const oswaldFont = { name: oswaldFontName, mixin: oswaldFontMixin };

export default oswaldFont;
