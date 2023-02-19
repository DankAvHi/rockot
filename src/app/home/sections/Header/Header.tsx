import { HeaderStyles as S } from "./Header.styles";
import HeaderText from "./Header.text";
import logoImage from "/public/static/logo.svg";

const Header = () => {
    return (
        <S.Header>
            <S.Content>
                <S.Logo
                    src={"/static/logo.svg"}
                    width={logoImage.width}
                    height={logoImage.height}
                    priority={true}
                    alt={"Логотип клуба"}
                />
                <S.HidenHeading>{HeaderText.mainHeading}</S.HidenHeading>
                <S.Heading>
                    {HeaderText.subHeading.text1}
                    <S.AccientText>{HeaderText.subHeading.accientText1}</S.AccientText>
                    {HeaderText.subHeading.text2}
                </S.Heading>
            </S.Content>
        </S.Header>
    );
};

export default Header;
