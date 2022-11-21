import globalStyles from "../../styles/global.module.css";
import Header from "../components/Header/Header";
import styles from "./home.module.css";

const page = () => {
     return (
          <>
               <Header />
               <main className={`${styles.main} ${globalStyles.pageContainer}`}></main>
          </>
     );
};

export default page;
