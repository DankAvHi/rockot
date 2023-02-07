import useScrollPosition from "../../../hooks/scrollPosition.hook";
import Logo from "./components/Logo/Logo";
import { Container, StyledNavigation } from "./Navigation.styles";

const Navigation = () => {
    const scroll = useScrollPosition();

    return (
        <StyledNavigation $opacity={scroll > 10}>
            <Container>
                <Logo />
            </Container>
        </StyledNavigation>
    );
};

export default Navigation;
