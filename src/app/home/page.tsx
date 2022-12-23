import globalStyles from "../../styles/global.module.css";
import Header from "./components/Header/Header";
import styles from "./home.module.css";
import ChampionsSection from "./sections/ChampionsSection/ChampionsSection";

const page = () => {
     return (
          <>
               <Header />
                    <ChampionsSection />
          </>
     );
};

export default page;
