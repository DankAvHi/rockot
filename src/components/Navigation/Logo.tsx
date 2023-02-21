import { LogoImage, StyledLogo } from "./Logo.styles";

export const Logo = () => {
    return (
        <StyledLogo type={"link"} href="/">
            <LogoImage alt={"Логотип клуба"} />
        </StyledLogo>
    );
};
