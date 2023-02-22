import styled from "styled-components";
import { Champions } from "@assets";
import { fontsNames, colors, textMixins } from "@styles";

export const ChampionsSectionStyles = {
    ChampionsSection: styled.section`
        overflow: hidden;

        border-radius: 36px;
        border: 1px solid #000000;

        display: flex;
        align-items: flex-start;

        background-color: ${colors.black00};

        box-shadow: 0px 0px 32px -16px #ffffff;

        @media screen and (max-width: 1024px) {
            flex-direction: column;
        }
    `,

    Container: styled.div`
        padding: 24px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    `,

    Heading: styled.h2`
        font-size: 2.25rem;
        font-weight: 500;
    `,

    Paragraph: styled.p``,

    LogoText: styled.span`
        font-family: ${fontsNames.rawhideRawFontName};
        ${textMixins.accientTextMixin}
    `,

    ImageWrapper: styled.div`
        max-width: 640px;
        width: 100%;
        height: 427px;

        background: url(${Champions.src});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        @media screen and (max-width: 1024px) {
            background-position: center;

            max-width: 100%;
            height: 500px;
        }

        @media screen and (max-width: 425px) {
            height: auto;

            aspect-ratio: 16/9;

            background-size: cover;

            max-height: 100%;
        }
    `,
};
