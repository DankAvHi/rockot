import * as styled from "styled-components";
import colors from "./colors.styles";
import { fontsMixins } from "./fonts/index.font";
import variables from "./variables.styles";

const GlobalStyles = styled.createGlobalStyle`
    ${fontsMixins}
    * {
        list-style: none;
        margin: 0;

        border: none;

        padding: 0;

        box-sizing: border-box;
        scroll-behavior: smooth;

        background: transparent;

        font-family: ${variables.appFontFamily};
        font-size: ${variables.appFontSize};
        font-weight: ${variables.appFontWeight};
        text-decoration: none;
        color: ${colors.white100};
    }
    *::-webkit-scrollbar {
        border-left: 1px solid ${colors.white100};

        background-color: ${variables.appBackgroundColor};
    }
    *::-webkit-scrollbar-thumb {
        background-color: ${colors.white100};
    }

    a,
    button,
    input[type="submit"] {
        cursor: pointer;
    }

    img {
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    a,
    p,
    span {
        color: inherit;
        font-size: inherit;
        font-weight: inherit;
    }

    html,
    body {
        min-height: 100%;

        background-color: ${variables.appBackgroundColor};
    }
`;

export default GlobalStyles;
