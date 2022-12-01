import Image from "next/image";
import Link from "next/link";
import useWindowSize from "../../../../../hooks/windowSize.hook";
import styles from "./Logo.module.css";
import logoImage from "/public/static/miniLogo.svg";

type LogoPropsType = {
     onClick: () => void;
};

const Logo = ({ onClick }: LogoPropsType) => {
     const { size } = useWindowSize();

     if (size[0] <= 425)
          return (
               <button onClick={onClick} className={styles.Logo}>
                    <Image
                         className={styles.logoImage}
                         src={"/static/miniLogo.svg"}
                         width={logoImage.width}
                         height={logoImage.height}
                         alt={"Логотип клуба"}
                    />
               </button>
          );
     return (
          <Link href={"/"} className={styles.Logo}>
               <Image
                    className={styles.logoImage}
                    src={"/src/static/miniLogo.svg"}
                    width={logoImage.width}
                    height={logoImage.height}
                    alt={"Логотип клуба"}
               />
          </Link>
     );
};

export default Logo;
