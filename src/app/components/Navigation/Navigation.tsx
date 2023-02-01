import { useState } from "react";
import useScrollPosition from "../../../hooks/scrollPosition.hook";
import { sitePages } from "../../globalData";
import List from "./components/List/List";
import Logo from "./components/Logo/Logo";
import { Container, StyledNavigation } from "./Navigation.styles";

const Navigation = () => {
    const scroll = useScrollPosition();

    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    const toggleNavigationButtonOnClickHandler = () => {
        setIsNavigationOpen((prev) => !prev);
    };

    return (
        <StyledNavigation $opacity={scroll > 10}>
            <Container $open={isNavigationOpen}>
                <Logo onClick={toggleNavigationButtonOnClickHandler} />
                <List
                    linkOnClick={toggleNavigationButtonOnClickHandler}
                    isNavigationOpen={isNavigationOpen}
                    sitePages={sitePages}
                />
            </Container>
        </StyledNavigation>
    );
};

export default Navigation;
