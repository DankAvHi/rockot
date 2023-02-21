import { useScrollPosition } from "@/hooks";
import { Logo } from "./Logo";
import { Container, StyledNavigation } from "./Navigation.styles";

export const Navigation = () => {
    const scroll = useScrollPosition();

    return (
        <StyledNavigation $opacity={scroll > 10}>
            <Container>
                <Logo />
            </Container>
        </StyledNavigation>
    );
};
