import "../styles/index.css";
import Navigation from "./components/Navigation/Navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
          <html>
               <head />
               <body>
                    <Navigation />
                    {children}
               </body>
          </html>
     );
}
