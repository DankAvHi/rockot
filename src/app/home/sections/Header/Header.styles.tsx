import Image from "next/image";
import styled from "styled-components";
import colors from "../../../../styles/colors.styles";
import textMixins from "../../../../styles/text.styles";
import desktopBackgroundImage from "./assets/background.jpg";
import mobileBackgroundImage from "./assets/backgroundMobile.jpg";
import tabletBackgroundImage from "./assets/backgroundTablet.jpg";

export const StyledHeader = styled.header`
    padding: 48px 12px;

    min-height: calc(100vh - 77px);

    background: url(${desktopBackgroundImage.src});
    background-position: center center;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    animation: shadow 10s ease-in-out infinite;

    @media screen and (max-width: 1024px) {
        background: url(${tabletBackgroundImage.src}) center no-repeat;
        background-size: cover;
    }

    @media screen and (max-width: 650px) {
        background: url(${mobileBackgroundImage.src}) center no-repeat;
        background-size: cover;
    }

    @media screen and (max-width: 425px) {
        min-height: 100vh;
    }

    @keyframes shadow {
        0% {
            filter: saturate(1);
        }
        50% {
            filter: saturate(1.5);
        }
        100% {
            filter: saturate(1);
        }
    }
`;

export const Content = styled.div`
    transition: 0.4s;

    border-top: 2px solid ${colors.glassBorderColor};
    border-bottom: 2px solid ${colors.glassBorderColor};
    border-radius: 12px;

    padding: 48px 64px;

    backdrop-filter: blur(8px);
    background-color: ${colors.glassBackgroundColor};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media screen and (max-width: 1024px) {
        gap: 24px;
    }

    @media screen and (max-width: 425px) {
        padding: 32px 18px;
    }

    &:hover {
        backdrop-filter: blur(15px);
    }
`;

export const Logo = styled(Image)`
    max-width: 920px;
    max-height: 146px;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1024px) {
        max-width: 520px;
        max-height: 82px;
    }
`;

export const HidenHeading = styled.h1`
    position: absolute;
    visibility: hidden;
`;

export const Heading = styled.h2`
    font-size: 2rem;

    @media screen and (max-width: 1024px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 425px) {
        font-size: 1.2rem;
    }
`;

export const AccientText = styled.span`
    ${textMixins.accientTextMixin}
`;