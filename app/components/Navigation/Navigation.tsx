import Image from "next/image";
import Link from "next/link";
import styles from "./Navigation.module.css";
import logoImage from "/public/static/miniLogo.svg";

const Navigation = () => {
     return (
          <nav className={styles.Navigation}>
               <div className={styles.container}>
                    <Link href={"#"} className={styles.logoLink}>
                         <Image
                              className={styles.logoImage}
                              src={"/static/miniLogo.svg"}
                              width={logoImage.width}
                              height={logoImage.height}
                              alt={"Логотип клуба"}
                         />
                    </Link>

                    <ul className={styles.linksList}>
                         <li className={styles.linkItem}>
                              <Link href="#" className={styles.link}>
                                   {"Главная"}
                              </Link>
                         </li>
                         <li className={styles.linkItem}>
                              <Link href="#" className={styles.link}>
                                   {"Галерея"}
                              </Link>
                         </li>
                         <li className={styles.linkItem}>
                              <Link href="#" className={styles.link}>
                                   {"О Нас"}
                              </Link>
                         </li>
                         <li className={styles.linkItem}>
                              <Link href="#" className={styles.link}>
                                   {"Контакты"}
                              </Link>
                         </li>
                    </ul>
               </div>
          </nav>
     );
};

export default Navigation;
