import { HeaderStyles as S } from "./Header.styles";
import { HeaderText } from "./Header.text";

export const Header = () => {
    return (
        <S.Header>
            <S.Content>
                <S.Logo alt={"Логотип клуба"} />
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
