import { css } from "styled-components";

export const rootContainer = css`
    margin: 0 auto;
    padding: 24px 12px;

    max-width: 1440px;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const globalStyles = { rootContainer };

export default globalStyles;
