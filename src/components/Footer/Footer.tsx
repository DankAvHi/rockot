import { FooterStyles as S } from "./Footer.styles";
import { FooterText } from "./Footer.text";

export const Footer = () => {
    return (
        <S.Footer>
            <S.Container>
                <S.MediaList>
                    <S.MediaItem>
                        <S.MediaLink type="link" href={"/"}>
                            <S.LogoText>{FooterText.LogoText}</S.LogoText>
                        </S.MediaLink>
                    </S.MediaItem>
                </S.MediaList>
            </S.Container>
        </S.Footer>
    );
};
