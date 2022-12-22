import Image from "next/image";
import textStyles from "../../../../styles/text.module.css";
import Button from "../../../components/UI/Buttons/Button/Button";
import styles from "./Header.module.css";
import logoImage from "/public/static/logo.svg";

const Header = () => {
     return (
          <header className={styles.Header}>
               <div className={styles.content}>
                    <Image
                         className={styles.logo}
                         src={"/static/logo.svg"}
                         width={logoImage.width}
                         height={logoImage.height}
                         priority={true}
                         alt={"Логотип клуба"}
                    />
                    <h1 className={styles.hiddenHeading}>{"Rockot sports club"}</h1>
                    <h2 className={styles.heading}>
                         {"Спортивный клуб "}
                         <span className={textStyles.accientText}>{"акробатического рок-н-ролла "}</span>
                         {"в Краснодаре"}
                    </h2>
                    <Button className={styles.heroButton}>{"Записаться на пробное занятие"}</Button>
               </div>
          </header>
     );
};

export default Header;
