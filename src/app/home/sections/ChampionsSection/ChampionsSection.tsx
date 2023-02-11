import {
    Container,
    Heading,
    ImageWrapper,
    LogoText,
    Paragraph,
    StyledChampionsSection,
} from "./ChampionsSection.styles";
import ChampionsSectionText from "./ChampionsSection.text";

const ChampionsSection = () => {
    return (
        <StyledChampionsSection>
            <Container>
                <Heading>{ChampionsSectionText.heading}</Heading>
                <Paragraph>
                    {ChampionsSectionText.paragraph1.text1}
                    <LogoText>{ChampionsSectionText.paragraph1.logoText1}</LogoText>
                    {ChampionsSectionText.paragraph1.text2}
                </Paragraph>
                <Paragraph>{ChampionsSectionText.paragraph2}</Paragraph>
            </Container>

            <ImageWrapper />
        </StyledChampionsSection>
    );
};

export default ChampionsSection;
