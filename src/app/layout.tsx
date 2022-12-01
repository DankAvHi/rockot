import "../styles/index.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
          <html>
               <head />
               <body>
                    <Navigation />
                    {children}
                    <Footer />
               </body>
          </html>
     );
}
