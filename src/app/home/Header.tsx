import { AccientText, Content, Heading, HidenHeading, Logo, StyledHeader } from "./Header.styles";
import { HeaderText } from "./Header.text";

export const Header = () => {
    return (
        <StyledHeader>
            <Content>
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
