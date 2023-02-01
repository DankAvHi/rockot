import styled from "styled-components";
import textMixins from "../../../../styles/text.styles";
import ChampionsImage from "./assets/sectionImage.jpg";

export const StyledChampionsSection = styled.section`
    overflow: hidden;

    border-radius: 36px;
    border: 1px solid #000000;

    display: flex;
    align-items: flex-start;

    background-color: var(--black-00);

    box-shadow: 0px 0px 32px -16px #ffffff;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const Container = styled.div`
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
`;

export const Heading = styled.h2`
    font-size: 2.25rem;
    font-weight: 500;
`;

export const Paragraph = styled.p``;

export const LogoText = styled.span`
    font-family: var(--rawhide-raw-font);
    ${textMixins.accientTextMixin}
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`;

export const ListItem = styled.li`
    list-style: inside;
`;

export const ImageWrapper = styled.div`
    max-width: 640px;
    width: 100%;
    height: 427px;

    background: url(${ChampionsImage.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    box-shadow: inset 170px 0px 120px var(--black-00);

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
`;
