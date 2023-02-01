"use client";
import { Main } from "./home.styles";
import ChampionsSection from "./sections/ChampionsSection/ChampionsSection";
import Header from "./sections/Header/Header";

const page = () => {
    return (
        <>
            <Header />
            <Main>
                <ChampionsSection />
            </Main>
        </>
    );
};

export default page;
