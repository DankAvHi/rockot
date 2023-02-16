import { LogoStyles as S } from "./Logo.styles";
import logoImage from "/public/static/miniLogo.svg";

const Logo = () => {
    return (
        <S.Logo type={"link"} href="/">
            <S.LogoImage
                src={"/static/miniLogo.svg"}
                width={logoImage.width}
                height={logoImage.height}
                alt={"Логотип клуба"}
            />
        </S.Logo>
    );
};

export default Logo;
