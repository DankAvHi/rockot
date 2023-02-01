import useWindowSize from "../../../../../hooks/windowSize.hook";
import { LogoImage, StyledLogo } from "./Logo.styles";
import logoImage from "/public/static/miniLogo.svg";

type LogoPropsType = {
    onClick: () => void;
};

const Logo = ({ onClick }: LogoPropsType) => {
    const { size } = useWindowSize();

    const isMobile = size[0] <= 425;

    return (
        <StyledLogo onClick={onClick} type={isMobile ? "button" : "link"} href="/">
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
