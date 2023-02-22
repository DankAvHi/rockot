import { useScrollPosition } from "@hooks";
import { Logo } from "./Logo";
import { NavigationStyles as S } from "./Navigation.styles";

export const Navigation = () => {
    const scroll = useScrollPosition();

    return (
        <S.Navigation $opacity={scroll > 10}>
            <S.Container>
                <Logo />
            </S.Container>
        </S.Navigation>
    );
};
