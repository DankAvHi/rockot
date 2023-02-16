"use client";
import { HomeStyles as S } from "./home.styles";
import ChampionsSection from "./sections/ChampionsSection/ChampionsSection";
import Header from "./sections/Header/Header";

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
