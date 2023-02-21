"use client";
import { ChampionsSection } from "./ChampionsSection";
import { Header } from "./Header";
import { Main } from "./home.styles";

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
