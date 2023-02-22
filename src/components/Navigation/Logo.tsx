import { LogoStyles as S } from "./Logo.styles";

export const Logo = () => {
    return (
        <S.Logo type={"link"} href="/">
            <S.LogoImage alt={"Логотип клуба"} />
        </S.Logo>
    );
};
