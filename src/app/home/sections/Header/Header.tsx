import { AccientText, Content, Heading, HidenHeading, Logo, StyledHeader } from "./Header.styles";
import HeaderText from "./Header.text";
import logoImage from "/public/static/logo.svg";

const Header = () => {
    return (
        <StyledHeader>
            <Content>
                <Logo
                    src={"/static/logo.svg"}
                    width={logoImage.width}
                    height={logoImage.height}
                    priority={true}
                    alt={"Логотип клуба"}
                />
                <HidenHeading>{HeaderText.mainHeading}</HidenHeading>
                <Heading>
                    {HeaderText.subHeading.text1}
                    <AccientText>{HeaderText.subHeading.accientText1}</AccientText>
                    {HeaderText.subHeading.text2}
                </Heading>
            </Content>
        </StyledHeader>
    );
};

export default Header;
