import styled from "styled-components";
import { colors } from "../../styles";

export const FooterStyles = {
    Footer: styled.footer`
        background: ${colors.black00};

        display: flex;
        justify-content: center;
        align-items: flex-start;
    `,

    Container: styled.div`
        padding: 24px 12px;

        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 64px;
    `,

};
