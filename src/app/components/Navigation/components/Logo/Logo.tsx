import { LogoImage, StyledLogo } from "./Logo.styles";
import logoImage from "/public/static/miniLogo.svg";

const Logo = () => {
    return (
        <StyledLogo type={"link"} href="/">
            <LogoImage
                src={"/static/miniLogo.svg"}
                width={logoImage.width}
                height={logoImage.height}
                alt={"Логотип клуба"}
            />
        </StyledLogo>
    );
};

export default Logo;
