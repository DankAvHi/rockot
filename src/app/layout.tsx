"use client";
import { Navigation } from "../components";
import GlobalStyles from "../styles/index.styles";
import StyledComponentsRegistry from "../styles/registry";
import Footer from "../components/Footer/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <StyledComponentsRegistry>
            <>
                <GlobalStyles />
                <html lang="ru">
                    <head />
                    <body>
                        <Navigation />
                        {children}
                        <Footer />
                    </body>
                </html>
            </>
        </StyledComponentsRegistry>
    );
}
