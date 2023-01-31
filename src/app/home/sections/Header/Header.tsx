import Image from "next/image";
import textStyles from "../../../../styles/text.module.css";
import Button from "../../../components/UI/Buttons/Button/Button";
import styles from "./Header.module.css";
import HeaderText from "./Header.text";
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
        <h1 className={styles.hiddenHeading}>{HeaderText.mainHeading}</h1>
        <h2 className={styles.heading}>
          {HeaderText.subHeading.text1}
          <span className={textStyles.accientText}>
            {HeaderText.subHeading.accientText1}
          </span>
          {HeaderText.subHeading.text2}
        </h2>
        <Button className={styles.heroButton}>{HeaderText.heroButton}</Button>
      </div>
    </header>
  );
};

export default Header;
