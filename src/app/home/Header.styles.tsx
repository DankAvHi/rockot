import { Logo as LogoImage } from "@assets/icons";
import { HeaderBackground, HeaderBackgroundMobile, HeaderBackgroundTablet } from "@assets/images";
import styled from "styled-components";
import { colors, textMixins } from "@styles";

export const HeaderStyles = {
    Header: styled.header`
        padding: 48px 12px;

        min-height: calc(100vh - 77px);
        min-height: calc(100svh - 77px);

        background-image: url(${HeaderBackground.src});
        background-position: top center;
        background-size: cover;
        background-repeat: no-repeat;

        display: flex;
        align-items: flex-end;
        justify-content: center;

        @media screen and (max-width: 786px) {
            background-image: url(${HeaderBackgroundTablet.src});

            min-height: 100vh;
            min-height: 100svh;
        }

        @media screen and (max-width: 500px) and (min-height: 600px) {
            padding: 12px;

            background-image: url(${HeaderBackgroundMobile.src});
            background-position: center;
        }

        @media screen and (max-height: 425px) {
            padding: 12px;

            min-height: 100vh;
            min-height: 100svh;
        }
    `,

    Content: styled.div`
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

        @media screen and (max-height: 425px) {
            padding: 24px 12px;
        }

        &:hover {
            backdrop-filter: blur(15px);
        }
    `,

    Logo: styled(LogoImage)`
        max-width: 920px;
        max-height: 146px;
        width: 100%;
        height: 100%;

        @media screen and (max-width: 1024px) {
            max-width: 520px;
            max-height: 82px;
        }

        @media screen and (max-height: 425px) {
            max-width: 320px;
        }
    `,

    HidenHeading: styled.h1`
        position: absolute;
        visibility: hidden;
    `,

    Heading: styled.h2`
        font-size: 2rem;
        text-align: center;

        @media screen and (max-width: 1024px) {
            font-size: 1.5rem;
        }

        @media screen and (max-width: 425px) {
            font-size: 1.2rem;
        }

        @media screen and (max-height: 425px) {
            max-width: 620px;

            font-size: 1rem;
        }
    `,

    AccientText: styled.span`
        ${textMixins.accientTextMixin}
    `,
};
