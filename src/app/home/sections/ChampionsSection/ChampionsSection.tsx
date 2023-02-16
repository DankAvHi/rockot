import { ChampionsSectionStyles as S } from "./ChampionsSection.styles";
import ChampionsSectionText from "./ChampionsSection.text";

const ChampionsSection = () => {
    return (
        <S.ChampionsSection>
            <S.Container>
                <S.Heading>{ChampionsSectionText.heading}</S.Heading>
                <S.Paragraph>
                    {ChampionsSectionText.paragraph1.text1}
                    <S.LogoText>{ChampionsSectionText.paragraph1.logoText1}</S.LogoText>
                    {ChampionsSectionText.paragraph1.text2}
                </S.Paragraph>
                <S.Paragraph>{ChampionsSectionText.paragraph2}</S.Paragraph>
            </S.Container>

            <S.ImageWrapper />
        </S.ChampionsSection>
    );
};

export default ChampionsSection;
