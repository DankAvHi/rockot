import { FooterStyles as S } from "./Footer.styles";
import { FooterText } from "./Footer.text";
import { mediaLinks } from "./mediaLinks";

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
                    {mediaLinks.map(({ href, icon: Icon, name }) => (
                        <S.MediaItem key={name}>
                            <S.MediaLink type="link" href={href} external={true} target="_blank">
                                <Icon />
                                {name}
                            </S.MediaLink>
                        </S.MediaItem>
                    ))}
                </S.MediaList>
            </S.Container>
        </S.Footer>
    );
};
