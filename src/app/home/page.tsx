import globalStyles from "../../styles/global.module.css";
import styles from "./home.module.css";
import ChampionsSection from "./sections/ChampionsSection/ChampionsSection";
import Header from "./sections/Header/Header";

const page = () => {
  return (
    <>
      <Header />
      <main className={`${styles.main} ${globalStyles.rootContainer}`}>
        <ChampionsSection />
      </main>
    </>
  );
};

export default page;
