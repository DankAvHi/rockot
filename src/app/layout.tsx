"use client";
import { Navigation, Footer } from "@components";
import { GlobalStyles, StyledComponentsRegistry } from "@styles";

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
