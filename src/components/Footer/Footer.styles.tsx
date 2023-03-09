import styled from "styled-components";
import { colors } from "../../styles";
import { Button } from "../UI";

export const FooterStyles = {
    Footer: styled.footer`
        background: ${colors.black00};

        display: flex;
        justify-content: center;
        align-items: flex-start;
    `,

    Container: styled.div`
        padding: 24px 12px;

        max-width: 1440px;
        width: 100%;

        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 64px;

        @media screen and (max-width: 1440px) {
            padding: 24px 48px;
        }
        @media screen and (max-width: 768px) {
            justify-content: flex-start;
        }
        @media screen and (max-width: 425px) {
            justify-content: center;
        }
    `,

    MediaList: styled.ul`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    `,

    MediaItem: styled.li``,

    MediaLink: styled(Button)`
        display: flex;
        align-items: center;
        gap: 6px;

        font-size: 1.5rem;
    `,

    Navigation: styled.nav`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    `,
};
