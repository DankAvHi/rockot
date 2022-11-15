import "../styles/index.css";
import styles from "./app.module.css";
import Navigation from "./components/Navigation/Navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
          <html>
               <head />
               <body>
                    <Navigation />
                    <div className={styles.page}>{children}</div>
               </body>
          </html>
     );
}
