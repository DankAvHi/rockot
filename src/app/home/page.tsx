"use client";
import { ChampionsSection } from "./ChampionsSection";
import { Header } from "./Header";
import { HomeStyles as S } from "./home.styles";

export default function page() {
    return (
        <>
            <Header />
            <S.Main>
                <ChampionsSection />
            </S.Main>
        </>
    );
}
