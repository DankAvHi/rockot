import useScrollPosition from "../../../hooks/scrollPosition.hook";
import Logo from "./components/Logo/Logo";
import { NavigationStyles as S } from "./Navigation.styles";

const Navigation = () => {
    const scroll = useScrollPosition();

    return (
        <S.Navigation $opacity={scroll > 10}>
            <S.Container>
                <Logo />
            </S.Container>
        </S.Navigation>
    );
};

export default Navigation;
