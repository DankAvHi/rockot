"use client";
import { ChampionsSection } from "./ChampionsSection";
import { Header } from "./Header";
import { HomeStyles as S } from "./home.styles";

const page = () => {
    return (
        <>
            <Header />
            <S.Main>
                <ChampionsSection />
            </S.Main>
        </>
    );
};

export default page;
